Regarding passing include directories to `xats2*`` commands, Hongwei

> Let me use xats2js as an example.

> At this point, there is no command called 'xats2js'.
I use the following files directly:

```
xats2js_jsemit01_ats2.js // tail-recursion optimization done
xats2js_jsemit01_ats3.js // no tail-recursion optimization performed
```

> You can design and implement 'xats2js' to make it suitable for cargo-ats3.
I mean your version of 'xats2js' should go together with cargo-ats3.

> The following script shows how I compile ATS3 source to JS.

```
XATSHOME/xassets/bin/xats2js_node.sh
```

> There are many translation (TR) functions in ATS3. Often, a translation function
is paired with a proofread (PR) function (for locating errors in the result
of a translation run). There are different ways to string TR functions and PR
functions together. Unfortunately, there is very little documentation for now.

```
ATS-Xanadu/srcgen2/xats2js/srcgen1/UTIL/xats2js_jsemit01.dats
```

> For instance, the mymain_work function is an example of stringing some TR and
PR functions together. Maybe the easiest way is to remove the last 6 lines from
xats2js_jsemit01_ats3.js to turn it into a library of some sort. Then you can
write some JS code to call mymain_work directly.

> The file xats2js_jsemit01_ats3.js is BIG (2 million lines). Fortunately, I can
still use emacs to edit it.

## Current Solution: XATSHOME Overlay

The ATS3 compiler resolves bare `#include "..."` paths (no `/` or `./`
prefix) by searching `$XATSHOME`. We exploit this by creating an overlay
directory that mirrors real XATSHOME contents (via symlinks) and adds a
`.deps/` directory with resolved path dependencies. The compiler is invoked
with `XATSHOME` pointing to this overlay, so `#include ".deps/pkg/src/lib.dats"`
resolves through the XATSHOME search path.

Key detail: the Nix-generated wrapper scripts hardcode `export XATSHOME=...`,
so we invoke `node <compiler.js>` directly to control the environment.

This approach works today without compiler changes. A future custom JS
wrapper (per Hongwei's suggestion above) could replace it with a cleaner
include-path injection mechanism.
