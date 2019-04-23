import { checkArgument } from "../etc/checkError.js";
import progressX from './progressX.js';

const titles = [ "A", "B", "C" ];
const sections = [ "A", "B", "C", "D" ];
const children = sections.map( ( item ) => {
    let h1 = document.createElement( "h1" );
    h1.textContent = item;
    return h1;
});

let dom,
    labels,
    inputs,
    checked = "",
    length = -1;

describe('progressX:', () => {

    dom = progressX({
        titles: titles,
        children: children
    });

    it( `for  ${titles.length} titles we should have ${titles.length} inputs`, () => {
         length = dom.querySelectorAll( ".progress-x > input" ).length;
         expect( length ).toBe( titles.length );
    });

    it( `for  ${titles.length} titles we should have ${titles.length} labels`, () => {
         length = dom.querySelectorAll( ".progress-x-indicator > label" ).length;
         expect( length ).toBe( titles.length );
    });

    it( `for  ${titles.length} titles we should have ${titles.length} + 1 sections`, () => {
         length = dom.querySelectorAll( ".progress-x > section" ).length;
         expect( length ).toBe( children.length );
    });

    it( "array titles' index should be equal to label's textContent:", () => {
         labels = dom.querySelectorAll( ".progress-x-indicator > label" );
         labels = Array.prototype.map.call( labels, ( label ) => label.getAttribute( "data-switch-title" ) );
         expect( labels ).toEqual( titles );
    });
    
    it( "all inputs' [id] should be equal to corresponding label's [for]", () => {
         inputs = dom.querySelectorAll( ".progress-x > input" );
         labels = dom.querySelectorAll( ".progress-x-indicator > label" );

         inputs = Array.prototype.map.call( inputs, ( input ) => input.getAttribute( "id" ) );
         labels = Array.prototype.map.call( labels, ( label ) => label.getAttribute( "for" ) );
         expect( inputs ).toEqual( labels );
    });

});

