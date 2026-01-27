{
  description = "Unified Nix flake for ATS2 (Postiats) and ATS3 (Xanadu)";

  inputs = {
    # nixos-24.11 stable
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";

    # ATS3 dependencies
    xatshome = {
      url = "github:githwxi/XATSHOME";
      flake = false;
    };
    ats-xanadu = {
      url = "github:githwxi/ATS-Xanadu";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, flake-utils, xatshome, ats-xanadu }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};

        # ATS3 compiler wrapper script
        xats2js = pkgs.writeShellScriptBin "xats2js" ''
          #!/usr/bin/env bash
          export XATSHOME="${xatshome}"
          export XATSXANADU="${ats-xanadu}"
          exec ${pkgs.nodejs}/bin/node --stack-size=8000 \
            "${xatshome}/xassets/JS/xats2js/xats2js_jsemit01_ats3_opt1.js" "$@"
        '';

        # ATS3 to Python compiler wrapper
        xats2py = pkgs.writeShellScriptBin "xats2py" ''
          #!/usr/bin/env bash
          export XATSHOME="${xatshome}"
          export XATSXANADU="${ats-xanadu}"
          exec ${pkgs.nodejs}/bin/node --stack-size=8000 \
            "${xatshome}/xassets/JS/xats2py/xats2py_pyemit01_ats3_opt1.js" "$@"
        '';

        # Helper: build .dats to .js with runtime included
        xats2js-build = pkgs.writeShellScriptBin "xats2js-build" ''
          #!/usr/bin/env bash
          set -e

          usage() {
            echo "Usage: xats2js-build <file.dats> [-o output.js]"
            echo "  Compiles ATS3 to JavaScript with runtime included."
            echo "  Default output: <file>.js"
            exit 1
          }

          [[ $# -lt 1 ]] && usage

          INPUT="$1"
          shift

          # Check input exists and is .dats
          [[ ! -f "$INPUT" ]] && echo "Error: $INPUT not found" && exit 1
          [[ "$INPUT" != *.dats ]] && echo "Error: Input must be a .dats file" && exit 1

          # Parse -o option
          OUTPUT="''${INPUT%.dats}.js"
          while [[ $# -gt 0 ]]; do
            case "$1" in
              -o) OUTPUT="$2"; shift 2 ;;
              *) echo "Unknown option: $1"; usage ;;
            esac
          done

          export XATSHOME="${xatshome}"
          export XATSXANADU="${ats-xanadu}"
          RUNTIME="${xatshome}/xassets/JS/xats2js/runtime"

          cat "$RUNTIME/xats2js_js1emit.js" \
              "$RUNTIME/srcgen2_precats.js" \
              "$RUNTIME/srcgen2_prelude.js" > "$OUTPUT"
          ${pkgs.nodejs}/bin/node --stack-size=8000 \
            "${xatshome}/xassets/JS/xats2js/xats2js_jsemit01_ats3_opt1.js" "$INPUT" >> "$OUTPUT"

          echo "Built: $OUTPUT"
        '';

        # Helper: build if needed, then run
        xats2js-run = pkgs.writeShellScriptBin "xats2js-run" ''
          #!/usr/bin/env bash
          set -e

          usage() {
            echo "Usage: xats2js-run <file.dats> [-- node args...]"
            echo "  Builds (if needed) and runs ATS3 JavaScript."
            exit 1
          }

          [[ $# -lt 1 ]] && usage

          INPUT="$1"
          shift

          [[ ! -f "$INPUT" ]] && echo "Error: $INPUT not found" && exit 1
          [[ "$INPUT" != *.dats ]] && echo "Error: Input must be a .dats file" && exit 1

          OUTPUT="''${INPUT%.dats}.js"

          # Skip -- separator if present
          [[ "$1" == "--" ]] && shift

          # Rebuild if .js missing or older than .dats
          if [[ ! -f "$OUTPUT" ]] || [[ "$INPUT" -nt "$OUTPUT" ]]; then
            ${xats2js-build}/bin/xats2js-build "$INPUT" -o "$OUTPUT"
          fi

          exec ${pkgs.nodejs}/bin/node "$OUTPUT" "$@"
        '';

        # Development shell for ATS2
        ats2DevShell = pkgs.mkShell {
          name = "ats2-dev";
          buildInputs = with pkgs; [
            ats2
            gcc
            gmp
            gnumake
          ];
          shellHook = ''
            export PATSHOME="${pkgs.ats2}"
            echo "ATS2 development environment"
            echo "  patscc  - ATS2 compiler driver"
            echo "  patsopt - ATS2 compiler"
            echo "  PATSHOME=$PATSHOME"
          '';
        };

        # Development shell for ATS3
        ats3DevShell = pkgs.mkShell {
          name = "ats3-dev";
          buildInputs = with pkgs; [
            nodejs
            gnumake
            python3
          ];
          shellHook = ''
            export XATSHOME="${xatshome}"
            export XATSXANADU="${ats-xanadu}"
            export PATH="${xats2js}/bin:${xats2py}/bin:${xats2js-build}/bin:${xats2js-run}/bin:$PATH"
            echo "ATS3 (Xanadu) development environment"
            echo "  xats2js       - ATS3 to JavaScript compiler (raw)"
            echo "  xats2js-build - Compile with runtime included"
            echo "  xats2js-run   - Build and run"
            echo "  xats2py       - ATS3 to Python compiler"
            echo "  XATSHOME=$XATSHOME"
          '';
        };

        # Combined development shell with both ATS2 and ATS3
        combinedDevShell = pkgs.mkShell {
          name = "ats-dev";
          buildInputs = with pkgs; [
            # ATS2
            ats2
            # ATS3 dependencies
            nodejs
            python3
            # Common tools
            gcc
            gmp
            gnumake
          ];
          shellHook = ''
            # ATS2 setup
            export PATSHOME="${pkgs.ats2}"

            # ATS3 setup
            export XATSHOME="${xatshome}"
            export XATSXANADU="${ats-xanadu}"
            export PATH="${xats2js}/bin:${xats2py}/bin:${xats2js-build}/bin:${xats2js-run}/bin:$PATH"

            echo "Combined ATS2 + ATS3 development environment"
            echo ""
            echo "ATS2 (Postiats):"
            echo "  patscc  - ATS2 compiler driver"
            echo "  patsopt - ATS2 compiler"
            echo "  PATSHOME=$PATSHOME"
            echo ""
            echo "ATS3 (Xanadu):"
            echo "  xats2js       - ATS3 to JavaScript compiler (raw)"
            echo "  xats2js-build - Compile with runtime included"
            echo "  xats2js-run   - Build and run"
            echo "  xats2py       - ATS3 to Python compiler"
            echo "  XATSHOME=$XATSHOME"
          '';
        };

      in {
        packages = rec {
          ats2 = pkgs.ats2;
          inherit xats2js xats2py xats2js-build xats2js-run;
          default = ats2;
        };

        apps = rec {
          patsopt = flake-utils.lib.mkApp {
            drv = self.packages.${system}.ats2;
            name = "patsopt";
          };
          patscc = flake-utils.lib.mkApp {
            drv = self.packages.${system}.ats2;
            name = "patscc";
          };
          xats2js = flake-utils.lib.mkApp {
            drv = self.packages.${system}.xats2js;
          };
          xats2py = flake-utils.lib.mkApp {
            drv = self.packages.${system}.xats2py;
          };
          default = patsopt;
        };

        devShells = {
          ats2 = ats2DevShell;
          ats3 = ats3DevShell;
          default = combinedDevShell;
        };
      }
    );
}
