import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import axios from 'axios';
// import { useRandom } from '../use'
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchSave } from '../actions/saveAction';
import { useDispatch } from "react-redux";
import { fetchMenuDrink } from '../actions/menuDrinkAction';

export default function MenuDrink() {
    const menuDrink = useSelector((state) => state.menu_drink);
    const ingredient = useSelector((state) => state.ingredient);
    
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getDrink = async () => {
            try {
                const res = await axios.get(`http://localhost:5050/api/menuDrink?ing=${ingredient.id}`);
                console.log(res);

                dispatch(fetchMenuDrink(res.data));
            } catch (error) {
                console.log(error.response);
            }
        }


        getDrink();
    }, [dispatch, ingredient.id]);

    const getDrink = (name_menu) => {
        dispatch(fetchSave({ name_menu }));
        history.push('/ListDrink');
    }

    return (
        <>
            <Header />
            <body>
                
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                    <div className="top1">
                        <h2>Drink</h2>
                        <h3>{ ingredient.id }</h3>
                    </div>
                    
                <div className="col">
                    <span>Menu</span>
                </div>
                <div className="Box row">
                    { menuDrink.map((value, index) => {
                        return (
                            <>
                            <div className="Box1 col-6">
                            <img src={value.image_menu} alt="" />
                            </div>
                            <div className="Box2 col-6">
                            <button className="btn4" type="button" onClick={() => { getDrink(value.name_menu) }}>
                                <div>
                                    {value.name_menu}
                                </div>
                            </button>
                            </div> 
                            </>
                        )
                    }) }
                </div>
                
                <div className="col"><button className="btn2"><Link to="/" className='text-link'>Try again</Link></button></div>
                <div className="col"><button className="btn1"><Link to="/ListDrink" className='text-link'> Next! </Link></button></div>
                </div>
                </div>
            </body>
        </>
    )
}

