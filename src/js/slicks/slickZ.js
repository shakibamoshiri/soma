import { checkArgument } from "../etc/checkError.js";
var slickZ = (function( config ){
    var indexId = 1,
    indexGroupId = 1;

    return function (config) {
        checkArgument(config, "slick-z");

        var slickType = 'z',
        slickClassName = 'slick-' + slickType,
        slickItemClassName = slickClassName + '-item',
        inputName = slickClassName + '-switch-group-' + indexGroupId,
        inputId = slickClassName + '-switch-',
        labelFor = slickClassName + '-switch-',
        lastIndex = 0,
        maxItems = config.titles.length,
        children = config.children;

        // DOM variables
        var root, input, label, indicator, section;

        root = document.createElement('div');
        root.setAttribute('class', slickClassName);

        indicator = document.createElement('div');
        indicator.setAttribute('class', 'slick-z-indicator');

        // inputs and label settings
        while (lastIndex < maxItems) {

            input = document.createElement('input');
            input.setAttribute('id', inputId + indexId );
            input.setAttribute('type', 'radio');
            input.setAttribute('name', inputName);

            if (lastIndex === 0) {
                input.setAttribute('checked', 'checked');;
            }

            root.appendChild(input);

            label = document.createElement('label');
            label.setAttribute('for', labelFor + indexId );
            indicator.appendChild(label);

            ++lastIndex;
            ++indexId;
        }

        root.appendChild(indicator);

        // carousel-*-items settings
        lastIndex = 0;
        maxItems = config.titles.length;
        while (lastIndex < maxItems) {

            section = document.createElement('section');
            section.setAttribute('class', slickItemClassName);

            if (children) {
                section.appendChild(children[lastIndex]);
            }

            root.appendChild(section);
            ++lastIndex;
        }

        ++indexGroupId;
        return root;
    };
}());


export default slickZ;
