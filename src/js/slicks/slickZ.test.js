import { checkArgument } from "../etc/checkError.js";
import slickZ from './slickZ.js';

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

describe('slickZ:', () => {

    dom = slickZ({
            titles: titles,
            children: children 
    });

    it( `for ${children.length} children we should have ${children.length} inputs`, () => {
         length = dom.querySelectorAll( ".slick-z > input" ).length;
         expect( length ).toBe( children.length );
    });

    it( `for ${children.length} children we should have ${children.length} labels`, () => {
         length = dom.querySelectorAll( ".slick-z-indicator > label" ).length;
         expect( length ).toBe( children.length );
    });

    it( `for ${titles.length} children we should have ${titles.length} sections`, () => {
         length = dom.querySelectorAll( ".slick-z > section" ).length;
         expect( length ).toBe( children.length );
    });

    it( `inputed [0] attrubute checked should be "checked"`, () => {
         checked = dom.querySelectorAll( ".slick-z > input" )[ 0 ].getAttribute( "checked" );
         expect( checked ).toBe( "checked" );
    });

    it( "all inputs' [id] should be equal to corresponding label's [for]", () => {
         inputs = dom.querySelectorAll( ".slick-z > input" );
         labels = dom.querySelectorAll( ".slick-z-indicator > label" );

         inputs = Array.prototype.map.call( inputs, ( input ) => input.getAttribute( "id" ) );
         labels = Array.prototype.map.call( labels, ( label ) => label.getAttribute( "for" ) );
         expect( inputs ).toEqual( labels );
    });

});

