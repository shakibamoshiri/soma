import { checkArgument } from "../etc/checkError.js";
var progressX= (function (config) {
    var indexId = 1;

    return function( config ){
        checkArgument(config, "progress-x");

        var progressType = 'x',
            progressClassName = 'progress-' + progressType,
            progressIndicatorClassName = progressClassName + '-indicator',
            progressItemClassName = progressClassName + '-item',
            inputId = progressClassName + '-switch-',
            labelFor = progressClassName + '-switch-',
            lastIndex = 0,
            maxItems = config.titles.length,
            titles = config.titles,
            children = config.children,
        dataSwitch = undefined;


        // DOM variables
        var root, indicator, input, label, div, section, precent;

        root = document.createElement('div');
        root.setAttribute('class', progressClassName);

        indicator = document.createElement('div');
        indicator.setAttribute('class', progressIndicatorClassName);

        // inputs and label settings
        while (lastIndex < maxItems) {

            input = document.createElement('input');
            input.setAttribute('id', inputId + indexId);
            input.setAttribute('type', 'checkbox');
            
            root.appendChild(input);
            dataSwitch = titles[lastIndex].split( ":" );
            label = document.createElement('label');
            div = document.createElement('div');

            label.setAttribute('for', labelFor + indexId);
            if( dataSwitch[0] !== "" ){
                label.setAttribute('data-switch-title', dataSwitch[0] );
                label.setAttribute('class', 'switch-title');
            }
            label.setAttribute('data-switch', lastIndex );
            
            div.setAttribute('class', 'progress-bar' );
            precent = Math.round( ( lastIndex + 1 )  * ( 100 / maxItems ) );
            div.textContent = ( dataSwitch[1] || ( precent+ "%" ) );
            
            label.appendChild( div );
            indicator.appendChild(label);


            ++lastIndex;
            ++indexId;
        }

        root.appendChild(indicator);

        // progress-*-items settings
        lastIndex = 0;
        maxItems = (config.children ? config.children.length : 0);
        while (lastIndex < maxItems) {

            section = document.createElement('section');
            section.setAttribute('class', progressItemClassName);
            section.setAttribute('data-item', lastIndex - 1 );

            if (children) {
                section.appendChild(children[lastIndex]);
            }
            root.appendChild(section);
            ++lastIndex;
        }

        return root;
    }
}());

export default progressX;
