import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="App-navbar">
      <Link
        to="/addData"
        onClick={() => {
          dispatch(setCurrentPage('Add Readings'));
        }}
      >
        <i className="fas fa-plus-square fa-3x" />
        Add Readings
      </Link>
      <Link
        to="/readings"
        onClick={() => {
          dispatch(setCurrentPage('Readings'));
        }}
      >
        <i className="fas fa-chart-line fa-3x" />
        Records
      </Link>
      <Link
        to="/progress"
        onClick={() => {
          dispatch(setCurrentPage('Progress'));
        }}
      >
        <i className="fas fa-chart-pie fa-3x" />
        Progress
      </Link>
      <Link
        to="/more"
        onClick={() => {
          dispatch(setCurrentPage('More'));
        }}
      >
        <i className="fas fa-ellipsis-h fa-3x" />
        More
      </Link>

    </div>
  );
};


export default Navbar;
