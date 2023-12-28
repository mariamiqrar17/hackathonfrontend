import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TodoList from '../components/Todo/TodoList';
import { logoutUser } from '../Services/api';
import { clearUser } from '../Store/userSlice';

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const url = useSelector((state) => state.user.picture);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(clearUser());
      navigate('/login');
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <div className="mt-5 py-3">
      <div className="menu mt-3" aria-labelledby="dropdownMenuButton">
        {/* Add the menu icon here */}
        <FontAwesomeIcon icon={faBars} style={{ cursor: 'pointer' }} onClick={() => console.log('Menu clicked')} />
      </div>
      <TodoList />
      <button className="btn btn-sm btn-danger" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
