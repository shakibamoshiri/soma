import { checkArgument } from "../etc/checkError.js";
import carouselX from './carouselX.js';

const titles = [ "A", "B", "C" ];
const children = titles.map( ( item ) => {
    let h1 = document.createElement( "h1" );
    h1.textContent = item;
    return h1;
});

let dom,
    labels,
    inputs,
    checked = "",
    length = -1;

describe('carouselX:', () => {

    dom = carouselX({
        titles: titles,
        children: children
    });

    it( `for  ${titles.length} titles we should have ${titles.length} inputs`, () => {
        length = dom.querySelectorAll( ".carousel-x > input" ).length;
         expect( length ).toBe( titles.length );
    });

    it( `for  ${titles.length} titles we should have ${titles.length} labels`, () => {
         length = dom.querySelectorAll( ".carousel-x-indicator > label" ).length;
         expect( length ).toBe( titles.length );
    });

    it( `for  ${children.length} children we should have ${children.length} sections`, () => {
         length = dom.querySelectorAll( ".carousel-x > section" ).length;
         expect( length ).toBe( children.length );
    });

    it( `inputed [0] attrubute checked should be "checked"`, () => {
         checked = dom.querySelectorAll( ".carousel-x > input" )[ 0 ].getAttribute( "checked" );
         expect( checked ).toBe( "checked" );
    });

    it( "array titles' index should be equal to label's textContent:", () => {
         labels = dom.querySelectorAll( ".carousel-x-indicator > label" );
         labels = Array.prototype.map.call( labels, ( label ) => label.getAttribute( "data-switch-title" ) );
         expect( labels ).toEqual( titles );
    });
    
    it( "all inputs' [id] should be equal to corresponding label's [for]", () => {
         inputs = dom.querySelectorAll( ".carousel-x > input" );
         labels = dom.querySelectorAll( ".carousel-x-indicator > label" );

         inputs = Array.prototype.map.call( inputs, ( input ) => input.getAttribute( "id" ) );
         labels = Array.prototype.map.call( labels, ( label ) => label.getAttribute( "for" ) );
         expect( inputs ).toEqual( labels );
    });

});

