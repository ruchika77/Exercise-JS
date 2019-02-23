// import functions
const { area, perimeter } = require('./square');
describe('arithmetic/005', () => {
    describe('area', () => {
        it('should be defined', () => {
            expect(area).toBeDefined();
        });
        it('should return area of a square', () => {
            expect(area(1)).toBe(1);
            expect(area(2)).toBe(4);
            expect(area(6)).toBe(36);
            expect(area(0)).toBe(0);
        });
    });
    describe('perimeter', () => {
        it('should be defined', () => {
            expect(perimeter).toBeDefined();
        });
        it('should return perimeter of a square', () => {
            expect(perimeter(1)).toBe(4);
            expect(perimeter(0)).toBe(0);
            expect(perimeter(3)).toBe(12);
            expect(perimeter(2)).toBe(8);
        });
    });
});
