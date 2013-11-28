function getWidhtOfTheViewport() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function getHeightOfTheViewport() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientWidth;
}

function generateRandomNumber(min, max) {

    if (!min) min = 0

    if (!max) max = 100;

    var delta = max - min;

    var r = Math.random() * delta + min;

    r = Math.round(r);

    return r;

}


function toHex(number) {
    var hex = "";
    var remainder = 0;
    while (number != 0) {
        remainder = number % 16
        hex = getHexChar(remainder) + hex;
        number = (number - remainder) / 16;
    }
    return hex;
}

function getHexChar(numberLessThan16) {
    var char;
    switch (numberLessThan16) {
        case 10:
            char = "a";
            break
        case 11:
            char = "b";
            break
        case 12:
            char = "c";
            break
        case 13:
            char = "d";
            break
        case 14:
            char = "e";
            break
        case 15:
            char = "f";
            break
        default :
            char = "" + numberLessThan16;
    }

    return char;
}


function generateRandomHexColor() {

    var colorCode = "#"
        + toHex(generateRandomNumber(0, 255)) + toHex(generateRandomNumber(0, 255))
        + toHex(generateRandomNumber(0, 255));

    return colorCode;

}


const INITIAL_HEX_COLORS = [


    "#2B4C7E",
    "#567EBB",
    "#567EBB",
    "#606D80",
    "#606D80",


    "#FFFFFF",
    "#A1AC88",
    "#757575",
    "#464D70",
    "#464D70",


    "#A77200",
    "#254540",
    "#C4B49D",
    "#895F00",
    "#CF9106",


    "#002930",
    "#FFFFFF",
    "#F8F0AF",
    "#AC4A00",
    "#000000",


    "#896872",
    "#8A8270",
    "#807C8B",


    "#BD2A4E",
    "#654B6B",
    "#628179",
    "#2C3845",
    "#899738",


    "#86A09D",
    "#B2CB7A",
    "#FFFFFF",
    "#C8E7EA",
    "#00AA4F",


    "#FDF518",
    "#EE5D88",
    "#CC988B",
    "#C9A992",
    "#96C8EB",
    "#F9F8F6",


    "#2F8C2D",
    "#544799",
    "#628C61",
    "#594435",
    "#D8AC8B"

]
const INITIAL_HEX_COLORS_LENGTH = INITIAL_HEX_COLORS.length;

function generateRandomHexColorFromChoosenColors() {
    return INITIAL_HEX_COLORS[generateRandomNumber(0, INITIAL_HEX_COLORS_LENGTH)]
}

