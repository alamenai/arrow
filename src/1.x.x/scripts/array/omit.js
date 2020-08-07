/**
 * Author :
 * Github :
 * Date :
 * Unit Test : ./specs/1.x.x/scripts/arrays/omit.spec.js
 */

import {
    checkArray
} from "../../helpers/check"

export function omit(array, element) {
    // Remove an element from an array
    // If the element is redundant the function will remove all of them
    const array = [1, 2, 3, 4] // if element =2 the result will be : [1,3,4]
    const array1 = [1, 2, 2, 4] // if element =2 the result will be : [1,4]
    const array2 = ["a", "b", "c", "d"] // if element ="a" the result will be : ["b","c","d"]
    const array3 = [{
            a: 1
        }, {
            b: 2
        }, {
            c: 3
        }, {
            d: 4
        }] // if element a the result will be : [{b:2},{c:3},{d:4}

    if (checkArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement omit() function
        /**
         * Hint : Read COMMITS_TEMPLATE to know how to write your commits or see previous commits
         */
    }

}

export function omitMany(array, ...elements) {
    // Remove many different elements from an array
    // If the element is redundant the function will remove all of them
    const array = [1, 2, 3, 4] // if elements=[1,2,3] the result will be : [4]
    const array1 = [1, 2, 2, 4] // if element =[1,2] the result will be : [4]
    const array2 = ["a", "b", "c", "d"] // if elements=["a,"b"] the result will be : ["c","d"]
    const array3 = [{
            a: 1
        }, {
            b: 2
        }, {
            c: 3
        }, {
            d: 4
        }] // if element = [a,b] the result will be : [{c:3},{d:4}]

    if (checkArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement omitMany() function
        /**
         * Hint : Read COMMITS_TEMPLATE to know how to write your commits or see previous commits
         */
    }
}