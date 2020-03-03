import {
    REQUEST_CARS,
    RECEIVE_CARS,
    REQUEST_SINGLE_CAR,
    RECEIVE_SINGLE_CAR,
} from "./actions";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'cars',
    storage,
}
const cars = (
    state = {
        isFetching: false,
        cars: [],
        car: {},
    },
    action
) => {
    switch (action.type) {
        case REQUEST_CARS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case REQUEST_SINGLE_CAR:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CARS:
            return Object.assign({}, state, {
                isFetching: false,
                cars: mergeById(action.cars, state.cars),
            });
        case RECEIVE_SINGLE_CAR:
            return Object.assign({}, state, {
                isFetching: false,
                cars: mergeById([action.car], state.cars)
            });
        default:
            return state;
    }
};

const mergeById = (a1, a2) => a1.map(itm => ({...a2.find((item) => (item.id === itm.id) && item), ...itm}));
export default persistReducer(persistConfig, cars);
