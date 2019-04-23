import { checkArgument } from "../etc/checkError.js";
var carouselZ = (function (config) {
    var indexId = 1,
    indexGroupId = 1;


    return function( config ) {
        checkArgument(config, "carousel-z");

        var carouselType = 'z',
        carouselClassName = 'carousel-' + carouselType,
        carouselIndicatorClassName = carouselClassName + '-indicator',
        carouselItemClassName = carouselClassName + '-item',
        inputName = carouselClassName + '-switch-group-' + indexGroupId,
        inputId = carouselClassName + '-switch-',
        labelFor = carouselClassName + '-switch-',
        lastIndex = 0,
        maxItems = config.titles.length,
        titles = config.titles,
        children = config.children;

        // DOM variables
        var root, indicator, input, label, section;

        root = document.createElement('div');
        root.setAttribute('class', carouselClassName);

        indicator = document.createElement('div');
        indicator.setAttribute('class', carouselIndicatorClassName);

        // inputs and label settings
        while (lastIndex < maxItems) {

            input = document.createElement('input');
            input.setAttribute('id', inputId + indexId);
            input.setAttribute('type', 'radio');
            input.setAttribute('name', inputName);

            if (lastIndex === 0) {
                input.setAttribute('checked', 'checked');;
            }

            root.appendChild(input);

            label = document.createElement('label');
            label.setAttribute('for', labelFor + indexId);
            label.textContent = titles[lastIndex];
            indicator.appendChild(label);

            ++lastIndex;
            ++indexId
        }

        root.appendChild(indicator);

        // carousel-*-items settings
        lastIndex = 0;
        maxItems = (config.children ? config.children.length : 0);
        while (lastIndex < maxItems) {

            section = document.createElement('section');
            section.setAttribute('class', carouselItemClassName);

            if (children) {
                section.appendChild(children[lastIndex]);
            }

            root.appendChild(section);
            ++lastIndex;
        }

        // taking care of creating new carousels
        ++indexGroupId;

        return root;
    }
}())


export default carouselZ;

