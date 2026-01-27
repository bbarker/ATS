(* ****** ****** *)
(* ****** ****** *)
(*
Collatz Conjecture in ATS3 (xats2js)

The Collatz step function:
  - If n is even: n / 2
  - If n is odd: 3*n + 1

The conjecture states that for any positive integer,
repeatedly applying this function will eventually reach 1.
*)
(* ****** ****** *)
(* ****** ****** *)
#include
"prelude\
/almanac/HATS/pre2026_sats.hats"
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude\
/almanac/HATS/pre2026_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
// The Collatz step function
// Takes a positive integer and returns the next value in the sequence
//
fun
collatz_step
(n: sint): sint =
(
if (n % 2 = 0)
then n / 2
else 3 * n + 1
)
//
(* ****** ****** *)
(* ****** ****** *)
//
// Result type: (iterations, final_value)
// final_value will be the last computed value (1 when sequence terminates)
//
#typedef
collatz_result = (sint, sint)
//
// Recursive function to compute the Collatz sequence
// Returns a tuple of (number of iterations, final value)
//
fun
collatz_count
(n: sint): collatz_result =
(
  loop(n, 0)) where
{
fun
loop(curr, iters): collatz_result =
(
if (curr <= 1)
then @(iters, curr)
else loop(collatz_step(curr), iters + 1)
)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
// Alternative: trace the sequence and return intermediate values
// This version prints each step and returns (iterations, 1)
//
fun
collatz_trace
(n: sint): collatz_result =
(
  loop(n, 0)) where
{
fun
loop(curr, iters): collatz_result =
(
let
  val () = printsln("Step ", iters, ": ", curr)
in
  if (curr <= 1)
  then @(iters, curr)
  else loop(collatz_step(curr), iters + 1)
end
)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
// Test examples
//
val () = printsln("=== Collatz Step Function Tests ===")
val () = printsln("collatz_step(6) = ", collatz_step(6))   // 6 is even -> 3
val () = printsln("collatz_step(7) = ", collatz_step(7))   // 7 is odd -> 22
val () = printsln("collatz_step(1) = ", collatz_step(1))   // 1 is odd -> 4
//
val () = printsln("")
val () = printsln("=== Collatz Count Tests ===")
//
val result6 = collatz_count(6)
val () = printsln("collatz_count(6) = (", result6.0, ", ", result6.1, ")")
//
val result7 = collatz_count(7)
val () = printsln("collatz_count(7) = (", result7.0, ", ", result7.1, ")")
//
val result27 = collatz_count(27)
val () = printsln("collatz_count(27) = (", result27.0, ", ", result27.1, ")")
//
val () = printsln("")
val () = printsln("=== Collatz Trace for n=6 ===")
val traced = collatz_trace(6)
val () = printsln("Total iterations: ", traced.0)
//
(* ****** ****** *)
(* ****** ****** *)
//
val () = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(************************************************************)
(* end of [collatz.dats] *)
(************************************************************)
