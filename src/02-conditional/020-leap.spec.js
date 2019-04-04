// import functions
const { leapYear} = require('./020-leap.js');
describe('Conditional/019', () => {
    describe('Find if entered year is leap or not', () => {
        it('should be defined', () => {
            expect(leapYear).toBeDefined();
        });
        it('should return leap year', () => {
            expect(leapYear(1351)).toBe(false);
            expect(leapYear(2020)).toBe(true);
        });
    });
});