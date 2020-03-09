export const REQUEST_CARS = "REQUEST_CARS";
export const RECEIVE_CARS = "RECEIVE_CARS";

export const REQUEST_SINGLE_CAR = "REQUEST_SINGLE_CAR";
export const RECEIVE_SINGLE_CAR = "RECEIVE_SINGLE_CAR";

let api_url = "https://warm-dawn-92320.herokuapp.com/";

const requestCars = () => {
  return {
    type: REQUEST_CARS
  };
};

const receiveCars = data => {
  return {
    type: RECEIVE_CARS,
    cars: data
  };
};

const requestSingleCar = () => {
  return {
    type: REQUEST_SINGLE_CAR
  };
};

const receiveSingleCar = data => {
  return {
    type: RECEIVE_SINGLE_CAR,
    car: data
  };
};

export const fetchCars = () => {
  return dispatch => {
    dispatch(requestCars());

    return fetch(`${api_url}models`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        dispatch(receiveCars(json));
      });
  };
};

export const fetchSingleCar = id => {
  return dispatch => {
    dispatch(requestSingleCar());
    return fetch(`${api_url}model/${id}`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveSingleCar(json)));
  };
};
