function checkType( input){
    if (input === undefined) {
        throw "checkType => ERROR: One or more argument are undefined";
    }
    return Object.prototype.toString.call(input).replace("object ", "")
}

function checkProgressArgument( input ){
    if( checkType( input ) === "[Object]" ){
        
        checkItemsTitle( input );
        
        if (input.children !== undefined) {
            checkItemsChild(input);

            // special cause for progress-x*
            // children should be greater than titles by 1
            // the first one is for starting
            checkItemsEquality(input.children.length - 1, input.titles.length);
        }
    }
}

function checkSlickArgument (input) {

    if (checkType(input) === "[Object]") {

        // checkItems( input.items );

        // if( input.children !== undefined ){
        //   checkItemsChild( input );

        //   var size = input.items * input.children.length;
        //   checkItemsEquality( size, input.items, 2 );
        // }

        return "[Object]";

    } else if (checkType(input) === "[Array]") {
        return "[Array]";
    }

    // in neither case throw an error
    throw "checkSlickArgument => ERROR: only Array or Object are valid as argument";
}

function checkCarouselArgument (input) {

    // check for required data
    if (checkType(input) === "[Object]") {

        // checkItems( input.items );

        checkItemsTitle(input);

        if (input.children !== undefined) {
            checkItemsChild(input);

            checkItemsEquality(input.children.length, input.titles.length);
        }

        return "[Object]";

    } else if (checkType(input) === "[Array]") {
        return "[Array]";
    }

    // in neither case throw an error
    throw "checkCarouselArgument => ERROR: only Array or Object are valid as argument";
}

function checkArgument (input, name) {
    if (input === undefined) {
        throw "Error: function " + name +" argument is not defined";
    } else {
        switch (name) {
            case "carousel-x":
            case "carousel-y":
            case "carousel-z":
                checkCarouselArgument(input);
                break;

            case "slick-x":
            case "slick-z":
                checkSlickArgument(input);
                break;

            case "tab-x":
            case "tab-y":
            break;

            case "progress-x":
                checkProgressArgument(input);
            break;

            default:
        }
    }
    return true;
}

function checkItemsChild (input) {
    if (input.children === undefined || checkType(input.children) !== "[Array]") {
        throw "checkItemsChild => ERROR: {children: Array of DOM Node} was missed or NOT valid";
    }
    return true;
}

function checkItemsTitle (input) {
    if (input.titles === undefined || checkType(input.titles) !== "[Array]") {
        throw "checkItemsTitle => ERROR: {titles: Array of String} was missed or NOT valid";
    }
    return true;
}

function checkItemsEquality (children, items) {
    if (children !== items) {
        throw "checkItemsEquality => ERROR: children and items' array length are not equal";
    }
    return true;
}

export { checkArgument, checkItemsChild, checkItemsTitle, checkItemsEquality  };
