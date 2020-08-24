import { isArray, isNumberArray } from '../../../helpers/is';

function average(array) {
	if (isArray(array)) {
		return (
			array.reduce((acc, curr) => {
				//i removed the condition above that says if(isNumberArray(array))
				//and i replaced it by the following one
				if ((typeof curr === 'string' && curr != parseFloat(curr)) || curr === undefined) {
					throw 'The elements of an array should have a Number type';
				}

				return (acc += +(+curr));
			}, 0) / array.length
		);

		// Calculate the average of array
		/**
		 * Imagine that we have an array
		 * arr=[1,2,3]
		 * The average will be : 2
		 * We calculate the average by accumulate all elements using Reduce function then devide
		 * the result at the total number of elements
		 */

		// Before you commit :
		// Make sure to pass all test by run this command : npm run test:spec
		// Read COMMITS_TEMPLATE file
		// Expected commit : ":tada: Create and implement average.js"
		// Test file : /specs/1.x.x/scripts/array/math/average.spec.js
		// Test command : npm run test:spec
	}
}
export default average;
