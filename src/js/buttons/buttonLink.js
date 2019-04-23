const buttonLink = function (config) {

    if( config === undefined ){
        throw "ERROR: buttonLink requires an object { title: string, href: string }";
    }

    var buttonType = 'link',
    buttonClassName = 'button-link',
    title = config.title,
    href = config.href;

    if( !( typeof title === "string" && typeof href === "string" ) ){
        throw "ERROR: both [title] and [href] type should be string";
    }

    var a;

    a = document.createElement('a');
    a.setAttribute('class', buttonClassName);
    a.setAttribute('href', href );
    a.setAttribute('target', "_blank");
    a.textContent = title;

    return a;
}

export default buttonLink;
