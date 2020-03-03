export const REQUEST_CARS = "REQUEST_CARS";
export const RECEIVE_CARS = "RECEIVE_CARS";

export const REQUEST_SINGLE_CAR = "REQUEST_SINGLE_CAR";
export const RECEIVE_SINGLE_CAR = "RECEIVE_SINGLE_CAR";

let api_url = 'https://warm-dawn-92320.herokuapp.com/';

function requestCars() {
    return {
        type: REQUEST_CARS
    };
}


function receiveCars(data) {
    return {
        type: RECEIVE_CARS,
        cars: data
    };
}

function requestSingleCar() {
    return {
        type: REQUEST_SINGLE_CAR
    };
}

function receiveSingleCar(data) {
    return {
        type: RECEIVE_SINGLE_CAR,
        car: data
    };
}

export function fetchCars() {
    return function (dispatch) {
        dispatch(requestCars());

        return fetch(`${api_url}models`)
            .then(
                response => response.json(),
                error => console.log("An error occurred.", error)
            )
            .then(json => {
                dispatch(receiveCars(json))
            });
    };
}

export function fetchSingleCar(id) {
    return function (dispatch) {
        dispatch(requestSingleCar());
        return fetch(`${api_url}model/${id}`)
            .then(
                response => response.json(),
                error => console.log("An error occurred.", error)
            )
            .then(json => dispatch(receiveSingleCar(json)));

    };
}
