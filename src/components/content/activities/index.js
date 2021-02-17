import React from 'react';
import { useSelector } from 'react-redux';


const ActivitiesPage = () => {
  const { currentPage } = useSelector(state => state.status);

  const selectPage = current => {
    switch (current) {
      case 'edit activity':
        return <EditActivity />;
      default:
        return <ActivitiesHomePage />;
    }
  };

  const page = selectPage(currentPage);

  return (
    <div>
      {page}
    </div>
  );
};

export default ActivitiesPage;
