#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Updating submodules..."
git submodule update --init --remote
git submodule status

echo ""
echo "All submodules updated."
