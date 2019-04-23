import { checkArgument } from "../etc/checkError.js";
function slickX (config) {
    checkArgument(config, "slick-x");

    var slickType = 'x',
    slickClassName = 'slick-' + slickType,
    slickItemClassName = slickClassName + '-item',
    lastIndex = 0,
    maxItems = (config.children ? config.children.length : config.items),
    children = config.children;

    // DOM variables
    var root, div;

    root = document.createElement('div');
    root.setAttribute('class', slickClassName);

    while (lastIndex < maxItems) {

        div = document.createElement('div');
        div.setAttribute('class', slickItemClassName);

        if (children) {
            div.appendChild(children[lastIndex]);
        }
        root.appendChild(div);
        ++lastIndex;
    }

    return root;
}

export default slickX;
