// import functions
const { posNeg, POS, NEG } = require('./number');

describe('Conditional/016', () => {
    describe('Find numberr is positive or negative', () => {
        it('should be defined', () => {
            expect(posNeg).toBeDefined();
        });
        it('should return if number is positive or negative', () => {
            expect(posNeg(-2)).toBe(NEG);
            expect(posNeg(15)).toBe(POS);
        });
    });
});