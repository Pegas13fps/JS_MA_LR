'use strict';

// * Implement function countOccurrences:
// * Implement function which takes two params (`str`, `substr`) and returns the
// * number of times the `subst` appears in `str`.
// *
// * e.g. for str = 'azyxxzyzy', substr = 'zy' it should return 3, because 'zy'
// * appears 3 times: 'a[zy]xx[zy][zy]'.
// * str and substr contains only lowercase alphabetical letters. substr
// * doesn't contain repeating letters (substr can't be equal xyx)


function countOccurrences(str, substr) {
    return str.split(substr).length - 1;
}

console.log(countOccurrences('azyxxzyzy', 'zy')) // 3
console.log(countOccurrences('ababagalamaga', 'ba')) // 2