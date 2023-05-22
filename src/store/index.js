import {configureStore} from "@reduxjs/toolkit";
import {carsReducer, addCar, removeCar, searchTermChange} from "./slices/carsSlice";
import {formReducer, changeCost, changeName} from "./slices/formSlice";


const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {store, changeName, changeCost, addCar, removeCar, searchTermChange};