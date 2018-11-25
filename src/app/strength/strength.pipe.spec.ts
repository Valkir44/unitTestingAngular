import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () => {
    it('should dislpay weak if strength is 5',  () => {
        //arrange
        let pipe = new StrengthPipe();

        //act
        let value = pipe.transform(5);

        //assert
        expect(value).toEqual('5 (weak)')
    });

    it('should dislpay strong if strength is 10',  () => {
        //arrange
        let pipe = new StrengthPipe();

        //act
        let value = pipe.transform(10);

        //assert
        expect(value).toEqual('10 (strong)')
    });

    it('should dislpay unbelievable if strength is 20',  () => {
        //arrange
        let pipe = new StrengthPipe();

        //act
        let value = pipe.transform(20);

        //assert
        expect(value).toEqual('20 (unbelievable)')
    });
});