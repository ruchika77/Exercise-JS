// import functions
const { smallOfTwo} = require('./018-smallTwo');
describe('Conditional/018', () => {
    describe('Find small of 2 numbers', () => {
        it('should be defined', () => {
            expect(smallOfTwo).toBeDefined();
        });
        it('should return small number', () => {
            expect(smallOfTwo(13,5)).toBe(5);
            expect(smallOfTwo(-1500,1000)).toBe(-1500);
        });
    });
});