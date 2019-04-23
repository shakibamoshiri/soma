import buttonLink from './buttonLink.js';

let tag,
    title = "buttonLink",
    href = "http://somacss.ir/";

describe('buttonLink:', () => {

    tag = buttonLink({
        title: title,
        href: href 
    });

    it( `anchor tag's textContent should be equal to "${title}"`, () => {
         expect( tag.textContent ).toBe( title );
    });

    it( `anchor tag's href should be equal to "${href}"`, () => {
         expect( tag.href ).toBe( href );
    });
});

