/**
 * Author :
 * Github :
 * Date :
 * Unit Test : ./specs/order.spec.js
 */

import {
    checkArray
} from "../../helpers/check"

export function orderRangeDescBy(array, from, to, criteria) {
    // Order a range of an array by a specific criteria
    // Let's assume that we have this array
    const users = [{
            id: 1,
            name: "Ala Eddine"
        }, {
            id: 2,
            name: "Jhon Weak"
        }, {
            id: 3,
            name: "Eminem"
        }, {
            id: 4,
            name: "Karma"
        }]
        // When the developer call this method like this : orderRangeDescBy(users,0,2,'id')
    const orderedDescUsers = [{
        id: 3,
        name: "Eminem"
    }, {
        id: 2,
        name: "Jhon Weak"
    }, {
        id: 1,
        name: "Ala Eddine"
    }, {
        id: 4,
        name: "Karma"
    }]

    if (checkArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit: :zap: Implement orderRangeDescBy() function
    }

}

export function orderDescBy(array, criteria) {
    // Order an array by a specific criteria
    // Let's assume that we have this array
    const users = [{
            id: 1,
            name: "Ala Eddine"
        }, {
            id: 2,
            name: "Jhon Weak"
        }, {
            id: 3,
            name: "Eminem"
        }, {
            id: 4,
            name: "Karma"
        }]
        // When the developer call this method like this : orderDescBy(users,'id')
    const orderedDescUsers = [{
        id: 4,
        name: "Karma"
    }, {
        id: 3,
        name: "Eminem"
    }, {
        id: 2,
        name: "Jhon Weak"
    }, {
        id: 1,
        name: "Ala Eddine"
    }]

    if (checkArray(array)) {
        // Write your code here and remove the examples above
        // Run the test : npm run test:spec
        // Expected commit : :zap: Implement orderDescBy() function 
    }

}