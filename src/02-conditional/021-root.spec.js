// import functions
const { quadratic,n1,n2,n3} = require('./021-root.js');
describe('Conditional/021', () => {
    describe('Find the root and nature of root of a quadratic equation', () => {
        it('should be defined', () => {
            expect(quadratic).toBeDefined();
        });
        it('should root and nature of roots', () => {
            const result = quadratic(3,10,3);
            expect(result).toEqual(jasmine.objectContaining({
                root: 64,
                nature: n1
            }));
            const result1 = quadratic(1,2,1);
            expect(result1).toEqual(jasmine.objectContaining({
                root: 0,
                nature: n2
            }));
            const result2 = quadratic(1,1,1);
            expect(result2).toEqual(jasmine.objectContaining({
                root: -3,
                nature: n3
            }));
        });
    });
});