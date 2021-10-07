import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import { Link } from 'react-router-dom';
function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div className="container">
      <div className="head2">Welcome {user.name}!<br /><br /></div>
      <input type="button" onClick={handleLogout} value="Logout" />
      <div className="col"><button className="btn1"><Link to="/Main" className='text-link'>Go</Link></button></div>
    </div>
  );
}

export default Dashboard;
