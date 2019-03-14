// import functions
const { calculateTime } = require('./time');
describe('arithmetic/012', () => {
    describe('Convert seconds to hour,minute and seconds', () => {
        it('should be defined', () => {
            expect(calculateTime).toBeDefined();
        });
        it('should return the time in hour,minute and seconds', () => {
            const result = calculateTime(120);
            expect(result).toEqual(jasmine.objectContaining({
                h: 0,
                m: 2,
                s: 0
            }));
        });
    });
});