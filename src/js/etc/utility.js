export function dummyArray (number) {
    var array = new Array(number);
    var index = 0;
    var max = number;
    while (index < max) {
        array[index] = index;
        ++index;
    }

    return array;
}

export function createTag(name) {
    var tag = document.createElement(name);
    return function (text) {
        if (text) tag.textContent = text;
        return tag;
    }
}
