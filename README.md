<p align="center">
<img src="logo/logo-128.svg"/>
<h2 align="center">Arrow</h2>
</p> 
<h4 align="center">A modern JavaScript utility library for complex data structures</h4>

### Basic Example

```Javascript
import {omit} from "arrow"

const frameworks = ["react", "vue", "ember", "angular"];
const withoutAngular = omit(frameworks,"angular");

console.log(withoutAngular); // ["react", "vue", "ember"]
```

<a href="examples/README.md">Show more →</a>
