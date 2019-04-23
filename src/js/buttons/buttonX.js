const buttonX = (function( config ){
    var indexId = 1;
    return function (config) {

        if (config.title === undefined || typeof config.title !== "string") {
            throw "prototype.buttonY => ERROR: {title: String} was missed or not valid";
        }

        var buttonType = 'x',
        buttonClassName = 'button-' + buttonType,
        buttonIndicatorClassName = buttonClassName + '-indicator',
        buttonItemClassName = buttonClassName + '-item',
        inputId = 'button-' + buttonType + '-' + indexId,
        labelFor = inputId,
        children = config.children,
        maxItems = config.items,
        title = config.title,
        lastIndex = 0;

        // DOM variables
        var root, section, input, label;

        root = document.createElement('div');
        root.setAttribute('class', buttonClassName);

        input = document.createElement('input');
        input.setAttribute('id', inputId);
        input.setAttribute('type', 'checkbox');
        root.appendChild(input);

        label = document.createElement('label');
        label.setAttribute('for', labelFor);
        label.setAttribute('class', buttonIndicatorClassName);
        label.textContent = title;
        root.appendChild(label);
        
        
        lastIndex = 0;
        maxItems = (config.children ? config.children.length : 0);
        while (lastIndex < maxItems) {

            section = document.createElement('section');
            section.setAttribute('class', buttonItemClassName);

            if (children) {
                section.appendChild(children[lastIndex]);
            }
            root.appendChild(section);
            ++lastIndex;
        }

        ++indexId;

        return root;
    };
}());

export default buttonX;

