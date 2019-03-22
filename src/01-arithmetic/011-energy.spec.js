// import functions
const { mechanicEnergy } = require('./011-energy');
describe('arithmetic/011', () => {
    describe('Mechanic Energy', () => {
        it('should be defined', () => {
            expect(mechanicEnergy).toBeDefined();
        });
        it('should return mechanic energy of a particle', () => {
            expect(mechanicEnergy(12,80)).toBe(92);
        });
    });
});
