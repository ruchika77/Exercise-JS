// import functions
const { square, cube } = require('./squareCube');
describe('arithmetic/003', () => {
    describe('square', () => {
        it('should be defined', () => {
            expect(square).toBeDefined();
        });
        it('should return sqaure of a number', () => {
            expect(square(2)).toBe(4);
            expect(square(0)).toBe(0);
            expect(square(10.2)).toBe(104);
            expect(square(-12)).toBe(144);
        });
    });
    describe('cube', () => {
        it('should be defined', () => {
            expect(cube).toBeDefined();
        });
        it('should return cube of a number', () => {
            expect(cube(3)).toBe(27);
            expect(cube(0)).toBe(0);
            expect(cube(41.3)).toBe(70445);
            expect(cube(-20)).toBe(-8000);
        });
    });
});
