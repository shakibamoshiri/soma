import { checkArgument } from "../etc/checkError.js";
import buttonX from './buttonX.js';

const sections = [ "A", "B", "C", "D" ];
const children = sections.map( ( item ) => {
    let a = document.createElement( "a" );
    a.textContent = item;
    return a;
});

let dom,
    title = "buttonX",
    label,
    id,
    htmlFor,
    length = -1;

describe('buttonX:', () => {

    dom = buttonX({
        title: title,
        children: children
    });

    it( `we should only have one input element`, () => {
         length = dom.querySelectorAll( ".button-x > input" ).length;
         expect( length ).toBe( 1 );
    });

    it( `we should only have one label element`, () => {
         length = dom.querySelectorAll( ".button-x > label" ).length;
         expect( length ).toBe( 1 );
    });

    it( `for ${children.length} children we should have ${children.length} sections`, () => {
         length = dom.querySelectorAll( ".button-x > section" ).length;
         expect( length ).toBe( children.length );
    });

    it( "button's title  should be equal to label's textContent:", () => {
         label = dom.querySelector( ".button-x > label" ).textContent;
         expect( label ).toBe( title );
    });
    
    it( "the input' [id] should be equal to corresponding label's [for]", () => {
         id = dom.querySelector( ".button-x > input" ).getAttribute( "id" );
         htmlFor = dom.querySelector( ".button-x > label" ).getAttribute( "for" );
         expect( id ).toBe( htmlFor );
    });

});

