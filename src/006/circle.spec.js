// import functions
const { area, circumference } = require('./circle');
describe('arithmetic/006', () => {
    describe('area', () => {
        it('should be defined', () => {
            expect(area).toBeDefined();
        });
        it('should return area of circle', () => {
            expect(area(2)).toBe(13);
        });
    });
    describe('circumference', () => {
        it('should be defined', () => {
            expect(circumference).toBeDefined();
        });
        it('should return circumference of a circle', () => {
            expect(circumference(1)).toBe(6);
        });
    });
});
