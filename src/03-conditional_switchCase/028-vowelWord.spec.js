// import functions
const { findWordWithVowel } = require('./028-vowelWord');

describe('Conditional_switchCase/028', () => {
    describe('Enter a word with given vowel', () => {
        it('should be defined', () => {
            expect(findWordWithVowel).toBeDefined();
        });
        it('should return the type of character', () => {
            expect(findWordWithVowel('a')).toBe("Apple");
            expect(findWordWithVowel('e')).toBe("Elephant");
            expect(findWordWithVowel('i')).toBe("Icecream");
            expect(findWordWithVowel('o')).toBe("Orange");
            expect(findWordWithVowel('u')).toBe("Umbrella");
            expect(findWordWithVowel('U')).toBe("Umbrella");
            expect(findWordWithVowel('2')).toBe("Please enter a vowel");
            expect(findWordWithVowel('Q')).toBe("Please enter a vowel");
            expect(findWordWithVowel('@')).toBe("Please enter a vowel");
        });
    });
});