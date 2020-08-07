/**
 * Author :
 * Github :
 * Date :
 * Unit Test : ./specs/concat.spec.js
 */

export function concatRange(array, from, to, value) {
    // Concat the value with a portion of items
    const from = 1;
    const to = 3;
    const value = "github";
    const array = [1, 2, 3, 4, 5, 6]
        // When the developer call the API like this : concatRange(array,from,to,value)
    const concatedArray = [1, "2github", "3github", "4github", 5, 6]
    const concatedArray2 = [1, 25, 35, 45, 5, 6] // supposed value = 5
    if (isArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement concatRange() function
    }

}
export function concat(array, value) {
    // Concat the value with all items
    if (isArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement concat() function
    }
}