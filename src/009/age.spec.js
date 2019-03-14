// import functions
const { days } = require('./age');
describe('arithmetic/009', () => {
    describe('age', () => {
        it('should be defined', () => {
            expect(days).toBeDefined();
        });
        it('should return number of days on the Earth', () => {
            expect(days(27)).toBe(9882);
        });
    });
});
