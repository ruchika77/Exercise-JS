function findWordWithVowel(string) {
    let vowel = string.charAt(0);
    let word;
    switch (vowel) {
        case 'a':
            word = "Apple";
            break;
        case 'e':
            word = "Elephant";
            break;
        case 'i':
            word = "Icecream";
            break;
        case 'o':
            word = "Orange";
            break;
        case 'u': 
        case 'U':
            word = "Umbrella";
            break;
        default:
            word = "Please enter a vowel";
    }
    return word;
}
module.exports = {
    findWordWithVowel
};
