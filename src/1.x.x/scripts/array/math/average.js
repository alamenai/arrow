import { isArray } from '../../../helpers/is';

export const average = array => {
	if (isArray(array)) {
		return (array.reduce((acc, curr) => {
			if ((typeof curr === 'string' && curr != parseFloat(curr)) || curr === undefined) {
				throw 'The elements of an array should have a Number type';
			}
			return (acc += +(+curr));
		}, 0) / array.length
		);
	}
}