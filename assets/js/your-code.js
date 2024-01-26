export function getAllDogs() {
    // Your code here
    const endPoint = '/dogs';
    return fetch(endPoint);
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2');
}

export function postNewDog() {
    // Your code here
    const host = 'http://localhost:5001/';
    const endPoint = '/dogs';
    const body = new URLSearchParams({
	    name: 'fredericko',
	    age: 6
    })
    
    const options = {
	method: 'POST',
	headers: {
	    'content-Type': 'application/x-www-form-urlencoded'
	},
	body: body
    }
    return fetch(endPoint, options);
}

export function postNewDogV2(name, age) {
    // Your code here
    const endPoint = '/dogs'
    const body = new URLSearchParams({
	name, age
    })

    const options = {
	method: 'POST',
	headers: {
	    'content-Type': 'application/x-www-form-urlencoded'
	},
	body: body
    }
    return fetch(endPoint, options);
}

export function deleteDog(id) {
    // Your code here
    const endPoint = `/dogs/${id}/delete`;
    const options = {
	method: 'POST',
	headers: {
	    'AUTH': 'ckyut5wau0000jyv5bsrud90y'
	}
    };
    return fetch(endPoint, options);
}
