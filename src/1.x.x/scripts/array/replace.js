/**
 * Author :
 * Github :
 * Date :
 * Unit Test : ./specs/1.x.x/scripts/arrays/replace.spec.js
 */

import {
    isArray
} from "../../helpers/is"

export function replace(array, element, replacer) {
    // Replace an element with other element in an array
    // If the element is redundant the function will replace all of them
    const array = [1, 2, 3, 4] // if element =2 and replacer=0 the result will be : [1,0,3,4]
    const array1 = [1, 2, 2, 4] // if element =2 and the replacer =0 the result will be : [1,0,0,4]
    const array2 = ["a", "b", "c", "d"] // if element ="a" and replacer="b" the result will be : ["b","b","c","d"]
    const array3 = [{
            a: 1
        }, {
            b: 2
        }, {
            c: 3
        }, {
            d: 4
        }] // if element a and the replacer =2 the result will be : [{a:2},{b:2},{c:3},{d:4}

    if (isArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement replace() function
        /**
         * Hint : Read COMMITS_TEMPLATE to know how to write your commits or see previous commits
         */
    }

}

export function replaceMany(array, ...elements, ...replacers) {
    // Replace many elements with other elements in an array
    const array = [1, 2, 3, 4] // if elements =[2,4] and replacers=[1,2] the result will be : [1,1,3,2]
    const array2 = ["a", "b", "c", "d"] // if elements=["a","b"] and replacers=["c","d"] the result will be : ["c","d","c","d"]
    const array3 = [{
            a: 1
        }, {
            b: 2
        }, {
            c: 3
        }, {
            d: 4
        }] // if elements=[a,b] and the replacers=[5,6] the result will be : [{a:5},{b:6},{c:3},{d:4}]

    if (isArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement replaceMany() function
        /**
         * Hint : Read COMMITS_TEMPLATE to know how to write your commits or see previous commits
         */
    }

}