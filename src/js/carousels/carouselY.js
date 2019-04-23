import { checkArgument } from "../etc/checkError.js";
var carouselY = (function (config) {
    var indexId = 1,
    indexGroupId = 1;

    return function( config ){
        checkArgument(config, "carousel-y");

        var carouselType = 'y',
        carouselClassName = 'carousel-' + carouselType,
        carouselIndicatorClassName = carouselClassName + '-indicator',
        carouselItemClassName = carouselClassName + '-item',
        inputName = carouselClassName + '-switch-group-' + indexGroupId,
        inputId = carouselClassName + '-switch-',
        labelFor = carouselClassName + '-switch-',
        lastIndex = 0,
        maxItems = config.titles.length,
        titles = config.titles,
        children = config.children,
        arrow = ( config.arrow || {} ),
        dataSwitch = undefined;

        arrow.display = ( config.arrow ? ( config.arrow.display || false ) : false );
        arrow.position = ( config.arrow ? ( config.arrow.position || "" ) : "" );

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
            dataSwitch = titles[lastIndex].split( ":" );
            label = document.createElement('label');
            label.setAttribute('for', labelFor + indexId);
            label.setAttribute('data-switch-title', ( dataSwitch[0] || "" ));
            label.setAttribute('data-switch-guide', ( dataSwitch[1] || "" ) );
            label.setAttribute('class', 'switch-title hover switch-guide');
            label.setAttribute('data-child', lastIndex );
            indicator.appendChild(label);

            // creating arrows if we have { arrows: true }
            if( arrow.display === true && lastIndex === 0 ){
                var top, bottom, divArrow, space, label4top, label4bottom;

                divArrow = document.createElement( "div" );
                divArrow.setAttribute( "class", "carousel-y-arrow " + arrow.position );

                top = document.createElement( "div" );
                top.setAttribute( "class", "carousel-y-arrow-top" );

                space = document.createElement( "div" );
                space.setAttribute( "class", "carousel-y-arrow-space" );

                bottom = document.createElement( "div" );
                bottom.setAttribute( "class", "carousel-y-arrow-bottom" );

                divArrow.appendChild( top );
                divArrow.appendChild( space );
                divArrow.appendChild( bottom );

                while( lastIndex < maxItems ){

                    label4top = document.createElement('label');
                    label4bottom = document.createElement('label');

                    label4top.setAttribute('for', labelFor + indexId );
                    label4bottom.setAttribute('for', labelFor + indexId );

                    // for the top arrow, we should first append the last one
                    if( lastIndex === 0 ){
                        label4bottom.setAttribute('for', labelFor + ( indexId + ( maxItems - 1 ) ) );
                        // and for the rest we should decrease the index by 1
                    } else {
                        label4bottom.setAttribute('for', labelFor + ( indexId - 1 ) );
                    }

                    label4top.setAttribute('for', labelFor + indexId );

                    top.appendChild( label4top );
                    bottom.appendChild( label4bottom );

                    ++lastIndex;
                    ++indexId;
                }
                // reset the indexId and lastIndex
                indexId -= lastIndex;
                lastIndex = 0;
            } // end of adding arrows to a carousel

            ++lastIndex;
            ++indexId;
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

        if( arrow.display === true ){
            root.appendChild( divArrow );
        }
        // taking care of creating new carousels
        ++indexGroupId;
        return root;
    }
}());

export default carouselY;

