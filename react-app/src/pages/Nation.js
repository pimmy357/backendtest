import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useRandom } from "../use";
import { Link } from "react-router-dom";
import { fetchNation } from "../actions/nationAction";
import { useDispatch } from "react-redux";


export default function Nation() {
  const [nation, setNation] = useState([]);
  const dispatch = useDispatch();
  const [random] = useRandom(6);

  useEffect(() => {
    const getNation = async () => {
      try {
        const str = random.join(",");
        const res = await axios.get(
          `http://localhost:5050/api/randomNation?randomNation=${str}`
        );

        setNation(res.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    getNation();
  }, [random]);

  const getNewData = (e) => {
    e.preventDefault();
    document.location.reload();
  };
  const fetch_nation = (id) => {
    dispatch(fetchNation({ id }));
  };

  return (
    <>
      <Header />
      <body>
        <div className="container">
          <div className="row justify-content-start align-items-center">
              <div className="top">
                 <h1>Nationality</h1>
              </div>
              <div className="area">
              <div className="col1">
                {nation.map((value) => {
                  return (
                <button type="button" className="btn3" onClick={() => {
                  fetch_nation(value.nation_name);
                }}>
                <div className="textkey" key={value.nt_id}>
                  <span>{value.nation_name}</span>
                </div>
                </button>
              );
              })}
              </div>
              </div>
        
          <div className="col"><button className="btn2"><Link to="/" className='text-link' onClick={getNewData}>Try again</Link></button></div>
          <div className="col"><button className="btn1"><Link to="/Ingredient" className='text-link'>Next!</Link></button></div>
        
          </div>
        </div>
      </body>
    </>
  );
}