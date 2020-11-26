import React from 'react';

const pageStyle = {
  borderColor: '#eeeeef',
  display: 'inline-block',
  cursor: 'pointer',
  textAlign: 'left',
  padding: '10px',
  color: '#f454545',
  verticalAlign: 'center'
};

const pageContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alightItems: 'center',
  alignContent: 'left',
  height: '30px',
  minWidth: '26px',
  padding: '0px 6px',
  cursor: 'pointer'

};
const sideButton = {
  backgroundColor: 'transparent',
  border: 'none',
  verticalAlign: 'center',
  padding: '7px'
};

const pageButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '10px',
  color: '#757280',
  verticalAlign: 'center',
  fontFamily: 'Open Sans, Helvetica Neue, sans-serif, arial',
  fontSize: '16px',
  cursor: 'pointer'
};


const Pagination = ({ reviewsPerPage, totalReviews, selectPage }) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);

  }

  return (
    <div>
      <hr/>
      <div style={pageContainer} id='paginationContainer'>
        {/* <button style={sideButton} onClick={()=> console.log('click' )}> */}
        <svg style={sideButton} onClick={()=> console.log('click' )} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="icon_svg"><path d="M14.25 17.58a1 1 0 01-.71-.3L9 12.7a1 1 0 010-1.4l4.5-4.58A1 1 0 0115 6.7a1 1 0 010 1.42L11.15 12 15 15.88a1 1 0 010 1.42 1 1 0 01-.75.28z"/></svg>
        {/* </button> */}
        {pageNumbers.map((number, i) => (
          <button style={pageButtonStyle} onClick={selectPage} key={number} value={i + 1}>
            {number}
          </button>
        ))}
        <svg onClick={()=> console.log('click' )} style={sideButton} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="icon_svg"><path d="M9.75 17.58a1 1 0 01-.7-.28 1 1 0 010-1.42l3.8-3.88L9 8.12a1 1 0 111.41-1.42L15 11.3a1 1 0 010 1.4l-4.5 4.58a1 1 0 01-.75.3z"/></svg>
      </div>
      <hr/>
    </div>
  );
};

export default Pagination;