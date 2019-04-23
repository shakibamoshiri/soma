<p align="center">
	<a  href="http://somacss.ir"><img src="public/img/soma-logo.svg.png" alt="soma-logo.svg.png"></a>
</p>


<h2 align="center">Description</h2>

Soma CSS is a small, functional and pure CSS3 library which offers CSS components that are:
 + Immutable like Pure Functions in FP approach
 + Reusable like Objects in OOP approach
 + Nestable like Components in React approach
 
Components can be created:  
 + manually using simple editors or emmet plugin
 + or using JavaScript  
 
But, For their actions they do not need JavaScript.

<h2 align="center">Prerequisites</h2>

<h4>CSS Part</h4>
The CSS part is heavily base on 

  - flex-box
  - input's UI-State pseudo-class (= :checked)
  - label's [for] attribute
  - transform: transition

<h4>JavaScript Part</h4>
The JS part uses Pure JS DOM APi provided by browsers like

  - document.createElement
  - element.[get|set]Attribute
  - element.appendChild( Node )
  - etc

<h4>React Part</h4>
The React is base on:

  - react 16+
  - react-dom
  - JSX


<h2 align="center">How to Use</h2>

You can use them in either way of Pure CSS or creating them using JS and then using them.
Actually API has been divided in to three types:  

<h4>Using Pure CSS (= <a href="http://somacss.ir">somacss.ir</a>)</h4>
JavaScript is used for creating the components but CSS manages the state.

In ES6 format:  

```js
import { carouselZ, carouselY, carouselX, slickX, progressX } from 'somacss';
```

In ES5 format using Global `S`  

```js
<script type="application/javascript" src="soma.es5.js"></script>
// Global S.xxx are available to use
// S.carouselZ
// S.carouselY
// S.carouselX
// and so on
```

<h4>Using JavaScript (= <a href="http://somajs.ir">somajs.ir</a>)</h4>
JavaScript is used for both creating the and managing the state.

<h4>Using React (= <a href="http://somareact.ir">somareact.ir</a>)</h4>
React (JSX) is used for both creating the and managing the state.

<h2 align="center">Download</h2>

<h4>Source && Last Release</h4>

```
# Soma CSS
git clone https://github.com/k-five/soma

# Soma JS


# Soma React

```

<h4>Just Last Release</h4>

```
# Soma CSS
npm install somacss

# Soma JS


# Soma React

```

<h4></h4>
<h4></h4>



<h2 align="center">Example</h2>
<h4>Combining 5 components to build a super carousel</h4>

 - CarouselZ (managing Brands)
 - CarouselY (managing Categories)
 - CarouselX (managing Sections)
 - SlickX    (managing Products)
 - Carousel(Z or Y or X) (managing Types)  
 
 
 <p align="center">
	<a  href="http://somacss.ir/"><img src="public/img/somacss-challenge-shot.png" alt="somacss-challenge-shot.png"></a>
</p>
 

<h2 align="center">Copyright & License</h2>
<p align="center">
	<a  href="https://github.com/k-five/soma/blob/master/LICENSE"><img src="public/img/MIT.svg.png" alt="MIT.svg.png"></a>
</p>
