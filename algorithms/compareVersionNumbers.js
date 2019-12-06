/**
 * Compare version1 and version2
 * f version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
 * palindrome).
 */

const compareVersion = function(version1, version2) {
    // split both version into arrays
    let oneArr = version1.split('.');
    let twoArr = version2.split('.');
    
    if (oneArr.length > twoArr.length) {
        twoArr = addZeroes(twoArr, oneArr.length);
    } else {
        oneArr = addZeroes(oneArr, twoArr.length);
    }
    
    for (let i = 0; i < oneArr.length; i++) {
        let n1 = Number(oneArr[i]);
        let n2 = Number(twoArr[i]);
        
        if (n1 !== n2) {
            if (n1 > n2) {
                return 1;
            } else {
                return -1;
            } 
        }
    }
    return 0;
};

const addZeroes = (arr, num) => {
    let missingZeroes = num - arr.length
    for (let i = 0; i < missingZeroes; i++) {
        arr.push(0)
    }
    return arr;
}