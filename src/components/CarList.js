import {useSelector, useDispatch} from "react-redux";
import {removeCar} from "../store";

function CarList() {
    const dispatch = useDispatch();

    const {cars, name} = useSelector(({form, cars: {data, searchTerm}}) => {
        const filteredCars =  data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

   return {
       cars: filteredCars,
       name: form.name,
   }
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
    const renderedCars = cars.map((car) => {
        //Make existing cars bold in the list
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        //if cars in all or filtered list include car from form input

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>Delete</button>
            </div>
        );
    });

    return <div className="car-list">{renderedCars}
        <hr/>
    </div>;
}

export default CarList;
