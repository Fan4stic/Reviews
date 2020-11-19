import React from 'react';

const pageStyle = {
  borderColor: '#eeeeef',
  display: 'inline-block',
  cursor: 'pointer',
  textAlign: 'left',
  padding: '10px',
  color: '#f454545'
};

const pageButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '10px'
};


const Pagination = ({ reviewsPerPage, totalReviews, selectPage }) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);

  }

  return (
    <div style={pageStyle}>
      {pageNumbers.map((number, i) => (
        <button style={pageButtonStyle} onClick={selectPage} key={number} value={i + 1}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;