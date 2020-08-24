import { isArray } from '../../../helpers/is';

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
	}
}
export default average;
