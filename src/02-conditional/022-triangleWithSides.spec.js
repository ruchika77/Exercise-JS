// import functions
const { triangle, EQUILATERAL, ISOSCELES, SCALENE } = require('./022-triangleWithSides.js');
describe('Conditional/022', () => {
    describe('Find the type of triangle by its sides', () => {
        it('should be defined', () => {
            expect(triangle).toBeDefined();
        });
        it('should return type of triangle', () => {
            expect(triangle(2, 2, 2)).toBe(EQUILATERAL);
            expect(triangle(2, 2, 1)).toBe(ISOSCELES);
            expect(triangle(1, 0, 1)).toBe(ISOSCELES);
            expect(triangle(5, 0, 1)).toBe(SCALENE);
        });
    });
});