// import functions
const { getIncome} = require('./024-salary.js');
describe('Conditional/024', () => {
    describe('Find out monthly salary of sales person', () => {
        it('should be defined', () => {
            expect(getIncome).toBeDefined();
        });

        it('should return monthly salary based on 16% sale', () => {
            expect(getIncome(7000,51000)).toBe(15160);
        });

        it('should return monthly salary based on 14% sale', () => {
            expect(getIncome(7000,40000)).toBe(12600);
        });

        it('should return monthly salary based on 10% sale', () => {
            expect(getIncome(7000,33000)).toBe(10300);
        });

        it('should return monthly salary based on 5% sale', () => {
            expect(getIncome(7000,20000)).toBe(8000);
        });

        it('should return monthly salary based on 3% sale', () => {
            expect(getIncome(7000,10000)).toBe(7300);
        });

        it('should return monthly salary based on 2% sale', () => {
            expect(getIncome(7000,7000)).toBe(7140);
        });
            
    });
});