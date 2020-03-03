import React, {useEffect} from 'react'
import {fetchSingleCar} from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import SingleCar from '../components/SingleCar'
const DetailPage = props => {
    const {car, isFetching} = props;
    return (
        <div>
            {
                isFetching || !car ? (
                    <Loader/>
                ) : (
                    <div>
                        {
                            car.id ? (
                                <SingleCar car={car}/>
                            ) : ''
                        }
                    </div>
                )
            }
        </div>
    )
}

const ConnectedDetailPage = props => {
    const {match: {params: {id}}} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleCar(id))
    }, [dispatch, id]);

    const car = useSelector(state => state.cars.find(car => car.id === parseInt(id)));

    const isFetching = useSelector(state => state.isFetching);

    return <DetailPage car={car} isFetching={isFetching}/>
};
export default ConnectedDetailPage
