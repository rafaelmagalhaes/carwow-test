import React, { useEffect } from "react";
import { fetchCars } from "../redux/actions";
import Cars from "../components/Cars/";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";

const HomePage = props => {
  const { cars, isFetching } = props;
  return (
    <div className="App">
      {isFetching || !cars.length ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row pt-3">
            {cars.map(car => (
              <div className="col-xl-3 mb-3" key={car.id}>
                <Cars car={car} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
const ConnectedHomePage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const cars = useSelector(state => state.cars);

  const isFetching = useSelector(state => state.isFetching);

  return <HomePage cars={cars} isFetching={isFetching} />;
};
export default ConnectedHomePage;
