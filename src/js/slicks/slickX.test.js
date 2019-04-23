import { checkArgument } from "../etc/checkError.js";
import slickX from './slickX.js';

const content = [ "A", "B", "C" ];
const children = content.map( ( item ) => {
    let h1 = document.createElement( "h1" );
    h1.textContent = item;
    return h1;
});

let dom,
    list = [],
    length = -1;

describe('carouselZ:', () => {

    dom = slickX({
            children: children 
    });

    it( `for  ${children.length} children we should have ${children.length} divs`, () => {
         length = dom.querySelectorAll( ".slick-x > div" ).length;
         expect( length ).toBe( children.length );
    });

    it( "slick-x-item's child textContent should be equal to content array indexes:", () => {
         list = Array.prototype.map.call( dom.querySelectorAll( "div.slick-x > div.slick-x-item" ), ( h1 ) => h1.textContent );
         expect( list ).toEqual( content );
    });
});

