import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import axios from 'axios';
import { useRandom } from '../use'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchIngredient } from '../actions/ingredientAction';


export default function Ingredient() {
    const [ingredient,setIngredient] = useState([]);
    const [random] = useRandom(6);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getIngredient = async () => {
            try {
                const str = random.join(',');
                const res = await axios.get(`http://localhost:5050/api/randomIngredient?randomIngredient=${str}`);
                
                setIngredient(res.data);
            } catch (error) {
                console.log(error.response);
            }
        }

        getIngredient();
    }, [random]);

    const fetch_ingredient = (id) => {
        dispatch(fetchIngredient({ id }));
    }

    const getNewData = (e) => {
        e.preventDefault();
        document.location.reload();
    }
    return (
        <>
            <Header />
            <body>
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="top">
                        <h1>Ingredient</h1>
                    </div>
                <div className="area">
                <div className="col1">
                    { ingredient.map((value) => {
                        return (
                            <button type="button" className="btn3" onClick={() => { fetch_ingredient(value.Ingredient_name) }}>
                                <div className="textkey" key={value.In_id}>
                                    <span>{value.Ingredient_name}</span>
                                </div>
                            </button>
                        )
                    }) }
                </div>
                </div>
                
                <div className="col"><button className="btn2"><Link to="/" className='text-link' onClick={getNewData}>Try again</Link></button></div>
                <div className="col"><button className="btn1"><Link to="/MenuFood" className='text-link'>Next!</Link></button></div>
            </div>
            </div>
            </body>

        </>
    )
}