import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import axios from 'axios';
import { useRandomDrink } from '../use'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchIngredient } from '../actions/ingredientAction';

export default function Drink() {
    const [drink, setDrink] = useState([]);
    const [random] = useRandomDrink(6);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        const getDrink = async () => {
            try {
                const str = random.join(',');
                console.log(str);
                const res = await axios.get(`http://localhost:5050/api/randomDrink?randomDrink=${str}`);
                
                setDrink(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }

        getDrink();
    }, [random]);

    const getNewData = (e) => {
        e.preventDefault();
    }

    const set = (id) => {
        dispatch(fetchIngredient({ id }));
    }
    

    return (
        <>
            <Header />
            <body>
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="top">
                            <h1>DRINK</h1>
                        </div>
                    
                    <div className="area">
                    <div className="col1">
                        { drink.map((value) => {
                            return (
                                <button type="button" className="btn3" onClick={() => { set(value.Ingredient_name) }}>
                                    <div className="textkey" key={value.In_id}>
                                        <span>{value.Ingredient_name}</span>
                                    </div>
                                </button>
                            )
                        }) }
                    </div>
                    </div>
                
                <div className="col"><button className="btn2"><Link to="/" className='text-link' onClick={getNewData}>Try again</Link></button></div>
                <div className="col"><button className="btn1"><Link to="/menuDrink" className='text-link'>Next!</Link></button></div>
                </div>
                </div>
            </body>
        </> 
    )
}


