<p align="center">
<img src="../logo/logo-128.svg"/>
<h2 align="center">Arrow</h2>
</p> 
<h4 align="center">A modern JavaScript utility library for complex data structures</h4>

## Examples

```Javascript
import {hasAnyNumber} from "arrow"

const nothing = hasAnyNumber(["boy", "girl", "dad", "mom"]);
console.log(nothing); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastNumber} from "arrow"

const atLeast = hasAtLeastNumber([1, "girl", "dad", "mom"]);
console.log(atLeast); // true
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceNumber} from "arrow"

const once = hasOnceNumber(["dad", 1, 2, "mom"]);
console.log(once); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyNumber} from "arrow"

const only = hasOnlyNumber([1, "girl", "dad", "mom"]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairNumber} from "arrow"

const pair = hasPairNumber([1, "girl", "dad", "mom"]);
console.log(pair); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactNumber} from "arrow"

const exact = hasExactNumber([1, 2, 3, "mom"], 3);
console.log(exact); // true
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->


```Javascript
import {hasAnyString} from "arrow"

const nothing = hasAnyString(1, 2, "dad", "mom"]);
console.log(nothing); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastString} from "arrow"

const atLeast = hasAtLeastString([1, "girl", "dad", "mom"]);
console.log(atLeast); // true
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceString} from "arrow"

const once = hasOnceString(["dad", 1, 2, 3]);
console.log(once); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyString} from "arrow"

const only = hasOnlyString(["boy", "girl", "dad", "mom"]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairString} from "arrow"

const pair = hasPairString([1, 2, "dad", "mom"]);
console.log(pair); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactString} from "arrow"

const exact = hasExactString([1, 2, 3, "mom"], 3);
console.log(exact); // false
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->


```Javascript
import {hasAnyBoolean} from "arrow"

const nothing = hasAnyBoolean(1, 2, "dad", "mom"]);
console.log(nothing); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastBoolean} from "arrow"

const atLeast = hasAtLeastBoolean([true, "girl", "dad", "mom"]);
console.log(atLeast); // true
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceBoolean} from "arrow"

const once = hasOnceBoolean(["dad", 1, 2, 3]);
console.log(once); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyBoolean} from "arrow"

const only = hasOnlyString([true, false, true, false]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairBoolean} from "arrow"

const pair = hasPairString([1, true, "dad", "mom"]);
console.log(pair); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactBoolean} from "arrow"

const exact = hasExactBoolean([false, true, 3, "mom"], 2);
console.log(exact); // true
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->


```Javascript
import {hasAnyObject} from "arrow"

const nothing = hasAnyObject(1, 2, "dad", "mom"]);
console.log(nothing); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastObject} from "arrow"

const atLeast = hasAtLeastObject([1, "girl", "dad", "mom"]);
console.log(atLeast); // false
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceObject} from "arrow"

const once = hasOnceObject([{ person:"dad" }, 1, 2, 3]);
console.log(once); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyObject} from "arrow"

const only = hasOnlyObject([{ mom:"Jackline" }, { dad:"Jack" }, { boy:"Jim" }]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairObject} from "arrow"

const pair = hasPairObject([{ n:1 }, { n:2 }, "dad", "mom"]);
console.log(pair); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactObject} from "arrow"

const exact = hasExactObject([1, { n:2 }, 3, "mom"], 3);
console.log(exact); // false
```
<a href="examples/README.md">Show more →</a>


<hr> <!----------------------------------------------------------------------------------------------------->


```Javascript
import {hasAnyInfinity} from "arrow"

const nothing = hasAnyInfinity(1, 2, 3, 4]);
console.log(nothing); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastInfinity} from "arrow"

const atLeast = hasAtLeastInfinity([Infinity, 1, 2, 3]);
console.log(atLeast); // true
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceInfinity} from "arrow"

const once = hasOnceInfinity([1, 2, 2, 4]);
console.log(once); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyInfinity} from "arrow"

const only = hasOnlyInfinity([Infinity, Infinity]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairInfinity} from "arrow"

const pair = hasPairInfinity([Infinity, Infinity, "dad", "mom"]);
console.log(pair); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactInfinity} from "arrow"

const exact = hasExactInfinity([Infinity, Infinity, Infinity, "mom"], 3);
console.log(exact); // true
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->

```Javascript
import {hasAnyNull} from "arrow"

const nothing = hasAnyNull(1, 2, 3, 4]);
console.log(nothing); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastNull} from "arrow"

const atLeast = hasAtLeastNull([null, 1, 2, 3]);
console.log(atLeast); // true
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceNull} from "arrow"

const once = hasOnceNull([null, null, 2, 4]);
console.log(once); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyNull} from "arrow"

const only = hasOnlyNull([null, null]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairNull} from "arrow"

const pair = hasPairNull([null, null, "dad", "mom"]);
console.log(pair); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactNull} from "arrow"

const exact = hasExactNull([1, null, null, "mom"], 3);
console.log(exact); // false
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->

```Javascript
import {hasAnyNaN} from "arrow"

const nothing = hasAnyNaN([NaN, 2, 3, 4]);
console.log(nothing); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastNaN} from "arrow"

const atLeast = hasAtLeastNaN([null, 1, 2, 3]);
console.log(atLeast); // false
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceNaN} from "arrow"

const once = hasOnceNaN([NaN, null, 2, 4]);
console.log(once); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyNaN} from "arrow"

const only = hasOnlyNaN([null, null]);
console.log(only); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairNaN} from "arrow"

const pair = hasPairNaN([NaN, NaN, "dad", "mom"]);
console.log(pair); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactNaN} from "arrow"

const exact = hasExactNaN([1, NaN, NaN, "mom"], 3);
console.log(exact); // false
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->

```Javascript
import {hasAnyArray} from "arrow"

const nothing = hasAnyArray([[1, 2, 3], 4, 5, 6]);
console.log(nothing); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastArray} from "arrow"

const atLeast = hasAtLeastArray([null, 1, 2, 3]);
console.log(atLeast); // false
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceArray} from "arrow"

const once = hasOnceArray([NaN, null, 2, 4]);
console.log(once); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlyArray} from "arrow"

const only = hasOnlyArray([[1, 2], [3, 4]]);
console.log(only); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairArray} from "arrow"

const pair = hasPairArray([NaN, NaN, "dad", "mom"]);
console.log(pair); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactArray} from "arrow"

const exact = hasExactArray([[1,2], [3,4], NaN], 2);
console.log(exact); // true
```
<a href="examples/README.md">Show more →</a>
<hr> <!----------------------------------------------------------------------------------------------------->

```Javascript
import {hasAnySymbol} from "arrow"

const nothing = hasAnySymbol([Symbol(1), 2, 3, 4]);
console.log(nothing); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasAtLeastSymbol} from "arrow"

const atLeast = hasAtLeastSymbol([null, 1, 2, 3]);
console.log(atLeast); // true
```
<a href="examples/README.md">Show more →</a>

```Javascript
import {hasOnceSymbol} from "arrow"

const once = hasOnceSymbol([NaN, null, 2, 4]);
console.log(once); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasOnlySymbol} from "arrow"

const only = hasOnlySymbol([Symbol(1), Symbol(2)]);
console.log(only); // true
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasPairSymbol} from "arrow"

const pair = hasPairSymbol([NaN, NaN, "dad", "mom"]);
console.log(pair); // false
```
<a href="examples/README.md">Show more →</a>


```Javascript
import {hasExactSymbol} from "arrow"

const exact = hasExactSymbol([1, NaN, NaN, "mom"], 3);
console.log(exact); // false
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->

```Javascript
import {uniqueAll} from "arrow"

const unique = uniqueAll([1, 2, 3, 4]);
console.log(unique); // true
```
<a href="examples/README.md">Show more →</a>

<hr> <!----------------------------------------------------------------------------------------------------->

```Javascript
import {equalAll} from "arrow"

const equal = uniqueAll([2, 2, 3, 4]);
console.log(equal); // false
```
<a href="examples/README.md">Show more →</a>
