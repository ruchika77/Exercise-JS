// import functions
const { simple, compound } = require('./interest');
describe('arithmetic/010', () => {
    describe('simple', () => {
        it('should be defined', () => {
            expect(simple).toBeDefined();
        });
        it('should return simple interest', () => {
            expect(simple(1000,0.5,3)).toBe(2500);
        });
    });
    describe('compound', () => {
        it('should be defined', () => {
            expect(compound).toBeDefined();
        });
        it('should return compound interest', () => {
            expect(compound(1000,0.5,3)).toBe(1167);
        });
    });
});
