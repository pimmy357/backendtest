import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSave } from '../actions/saveAction';

export default function ListFood() {
    const save = useSelector((state) => state.save);
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteMenu = () => {
        dispatch(deleteSave());
        history.push('/');
    }
    return (
        <>
            <Header />
            <body>
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="top">
                            <h2>MENU DRINK</h2>
                            <h1>{ save.name_menu }</h1>
                        </div> 
                    </div> 
                <div className="dl">
                    <button className="btn2" type="button" onClick={() => { deleteMenu() }}> DELETE </button>
                </div>              
                <div className="Enjoy">
                    <Link className="a" to="/Home">Enjoy Eating</Link>
                </div>
                </div>
            </body>
        </>
    )
}
