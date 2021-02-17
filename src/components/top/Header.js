import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const Header = () => {
  const { currentPage } = useSelector(state => state.status);
  const dispatch = useDispatch();

  return (
    <div className="App-header">
      <Link
        to="/"
        className={
          currentPage === "Track Progress" ? "left-btn-off" : "left-btn-on"
        }
        onClick={() => dispatch(setCurrentPage("Track Progress"))}
      >
        <i className="fas fa-chevron-left fa-2x" />
      </Link>
      <Link to="/" onClick={() => dispatch(setCurrentPage("Track Progress"))}>
        <h3 className="App-title">{currentPage || "Track Progress"}</h3>
      </Link>
      <Link to="/" className="right-btn-off">
        right
      </Link>
    </div>
  );
};


export default Header;
