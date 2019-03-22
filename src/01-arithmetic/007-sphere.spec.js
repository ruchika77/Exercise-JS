// import functions
const { area, volume } = require('./007-sphere');
describe('arithmetic/007', () => {
    describe('area', () => {
        it('should be defined', () => {
            expect(area).toBeDefined();
        });
        it('should return area of sphere', () => {
            expect(area(5)).toBe(314);
        });
    });
    describe('volume', () => {
        it('should be defined', () => {
            expect(volume).toBeDefined();
        });
        it('should return volume of a circle', () => {
            expect(volume(2)).toBe(33);
        });
    });
});
