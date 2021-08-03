import {quickSort} from './quick-sort';

describe('QuickSort Tests',()=> {
    it('should test quicksort',()=> {
        expect(quickSort([1, 6, 1, 5, 3, 2, 1, 4])).toEqual([1,1,1,2,3,4,5,6]);
    });
});
