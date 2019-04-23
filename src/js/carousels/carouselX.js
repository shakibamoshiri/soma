import { checkArgument } from "../etc/checkError.js";
var carouselX = (function( config ){
    var indexId = 1,
    indexGroupId = 1;

    return function(config){
        checkArgument(config, "carousel-x");



        var carouselType = 'x',
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
        arrow = ( config.arrow || {} );

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
            input.setAttribute('id', inputId + indexId );
            input.setAttribute('type', 'radio');
            input.setAttribute('name', inputName);

            if (lastIndex === 0) {
                input.setAttribute('checked', 'checked');;
            }

            root.appendChild(input);

            label = document.createElement('label');
            label.setAttribute('for', labelFor + indexId );
            label.setAttribute('data-switch-title', ( titles[lastIndex] || "Empty Title" ) );
            label.setAttribute('class', 'switch-title hover animation');
            indicator.appendChild(label);

            // creating arrows if we have { arrows: true }
            if( arrow.display === true && lastIndex === 0 ){
                var left, right, divArrow, space, label4left, label4right;

                divArrow = document.createElement( "div" );
                divArrow.setAttribute( "class", "carousel-x-arrow " + arrow.position );

                left = document.createElement( "div" );
                left.setAttribute( "class", "carousel-x-arrow-left" );

                space = document.createElement( "div" );
                space.setAttribute( "class", "carousel-x-arrow-space" );

                right = document.createElement( "div" );
                right.setAttribute( "class", "carousel-x-arrow-right" );

                divArrow.appendChild( left );
                divArrow.appendChild( space );
                divArrow.appendChild( right );

                while( lastIndex < maxItems ){

                    label4left = document.createElement('label');
                    label4right = document.createElement('label');

                    label4left.setAttribute('for', labelFor + indexId );
                    label4right.setAttribute('for', labelFor + indexId );

                    // for the left arrow, we should first append the last one
                    if( lastIndex === 0 ){
                        label4left.setAttribute('for', labelFor + ( indexId + ( maxItems - 1 ) ) );
                        // and for the rest we should decrease the index by 1
                    } else {
                        label4left.setAttribute('for', labelFor + ( indexId - 1 ) );
                    }

                    label4right.setAttribute('for', labelFor + indexId );

                    left.appendChild( label4left );
                    right.appendChild( label4right );

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
    };
}());

export default carouselX;
