// import functions
const { typeOfTriangle, NAT, RAT, AAT, OAT } = require('./023-triangleWithAngles.js');
describe('Conditional/023', () => {
    describe('Find the type of triangle by its angles', () => {
        it('should be defined', () => {
            expect(typeOfTriangle).toBeDefined();
        });
        it(`should return : ${NAT}`, () => {
            expect(typeOfTriangle(2, 2, 2)).toBe(NAT);
        });

        it(`should return : ${RAT}`, () => {
            expect(typeOfTriangle(90, 45, 45)).toBe(RAT);
            expect(typeOfTriangle(45, 90, 45)).toBe(RAT);
            expect(typeOfTriangle(45, 45, 90)).toBe(RAT);
        });

        it(`should return : ${AAT}`, () => {
            expect(typeOfTriangle(60, 60, 60)).toBe(AAT);
            expect(typeOfTriangle(40, 80, 60)).toBe(AAT);
            expect(typeOfTriangle(80, 30, 70)).toBe(AAT);
        });

        it(`should return : ${OAT}`, () => {
            expect(typeOfTriangle(120, 30, 30)).toBe(OAT);
            expect(typeOfTriangle(30, 120, 30)).toBe(OAT);
            expect(typeOfTriangle(30, 30, 120)).toBe(OAT);
        });
            
    });
});