// import functions
const { volume } = require('./008-cylinder');
describe('arithmetic/008', () => {
    describe('radius and volume', () => {
        it('should be defined', () => {
            expect(volume).toBeDefined();
        });
        it('should return volume of cylinder', () => {
            expect(volume(1,2)).toBe(6);
        });
    });
});
