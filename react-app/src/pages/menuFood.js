import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import axios from 'axios';
// import { useRandom } from '../use'
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchMenu } from "../actions/menuAction";
import { fetchSave } from '../actions/saveAction';
import { useDispatch } from "react-redux";

export default function MenuFood() {
    const menu = useSelector((state) => state.menu);
    const ingredient = useSelector((state) => state.ingredient);
    const nation = useSelector((state) => state.nation);
    const history = useHistory();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getFood = async () => {
            try {
                const res = await axios.get(`http://localhost:5050/api/menuFood?nt=${nation.id}&ing=${ingredient.id}`);

                dispatch(fetchMenu(res.data));
            } catch (error) {
                console.log(error.response);
            }
        }


        getFood();
    }, [dispatch, ingredient.id, nation.id]);

    const getFood = (name_menu) => {
        dispatch(fetchSave({ name_menu }));
        history.push('/listFood');
    }

    return (
        <>
            <Header />
            <body>
            <div className="container">
                <div className="row justify-content-start align-items-center">
                    <div className="col-6">
                        <div className="top1">
                            <h2>Nationality</h2>
                            <h3>{ nation.id }</h3>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="top1">
                            <h2>Ingredient</h2>
                            <h3>{ ingredient.id }</h3>
                        </div>
                    </div>
                    <div className="col4">
                        <span>Menu</span>
                    </div>
                    <div className="Box row">
                        { menu.map((value, index) => {
                            return (
                                <>
                                <div className="Box1 col-6">
                                <img src={value.image_menu} alt="" />
                                </div>
                                <div className="Box2 col-6">
                                <button className="btn4" key={index} type="button" onClick={() => { getFood(value.name_menu) }}>
                                    <div>
                                        {value.name_menu}
                                    </div>
                                
                                </button>
                                </div>  
                                </>
                            )
                        }) }
                    </div>
                
                
                <div className="col"><button className="btn2"><Link to="/" className='text-link' /*onClick={getNewData}*/>Try again</Link></button></div>
                <div className="col"><button className="btn1"><Link to="/listFood" className='text-link'>Next!</Link></button></div>
                
                </div>
                </div>
            </body>
        </>
    )
}