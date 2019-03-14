// import functions
const { convertTemperature } = require('./celcius');
describe('arithmetic/013', () => {
    describe('Convert fahrenheit to celcius', () => {
        it('should be defined', () => {
            expect(convertTemperature).toBeDefined();
        });
        it('should return mechanic energy of a particle', () => {
            expect(convertTemperature(150)).toBe(66);
        });
    });
});
