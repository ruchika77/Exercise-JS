// import functions
const { bigOfThree} = require('./019-bigNum');
describe('Conditional/019', () => {
    describe('Find big of 3 numbers', () => {
        it('should be defined', () => {
            expect(bigOfThree).toBeDefined();
        });
        it('should return biggest number', () => {
            expect(bigOfThree(13,5,50)).toBe(50);
            expect(bigOfThree(150,100,10)).toBe(150);
            expect(bigOfThree(30,100,10)).toBe(100);
        });
    });
});