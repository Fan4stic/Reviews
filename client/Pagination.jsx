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
  padding: '7px',
  fill: '#757280',
};

const pageButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '10px',
  color: '#757280',
  verticalAlign: 'center',
  fontFamily: 'Open Sans, Helvetica Neue, sans-serif, arial',
  fontSize: '16px',
  fontWeight: '400',
  cursor: 'pointer'
};

const currPageStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '10px',
  color: '#757280',
  verticalAlign: 'center',
  fontFamily: 'Open Sans, Helvetica Neue, sans-serif, arial',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer'
};


const pageInfoStyle = {
  color: '#757280',
  textAlign: 'right',
};
//if pagenumber greater than 5 make pagenumbers array only from 5 below to 5 above with currentpage in bold and

const Pagination = ({ reviewsPerPage, totalReviews, selectPage, currentPage }) => {
  const pageNumbers = [];

  //change this logic to use curent page and do 5 below and 5 above if over 5
  if (currentPage < 5) {
    let hiPage = 10;
    let totalPages = 10;
    if (Math.ceil(totalReviews / reviewsPerPage) < 10) {
      hiPage = Math.ceil(totalReviews / reviewsPerPage);
    }
    for (var i = 1; i <= hiPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    let hiPage = currentPage + 5;
    let totalPages = Math.ceil(totalReviews / reviewsPerPage);
    if (totalPages < currentPage + 5) {
      hiPage = totalPages;
      console.log(hiPage);
    }
    for (var i = currentPage - 4; i <= hiPage; i++) {
      pageNumbers.push(i);
    }
  }



  return (
    <div>
      <hr/>
      <div style={pageContainer} id='paginationContainer'>
        <button style={sideButton} value={parseInt(currentPage - 1)} onClick={selectPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="icon_svg">
            <path d="M14.25 17.58a1 1 0 01-.71-.3L9 12.7a1 1 0 010-1.4l4.5-4.58A1 1 0 0115 6.7a1 1 0 010 1.42L11.15 12 15 15.88a1 1 0 010 1.42 1 1 0 01-.75.28z"/>
          </svg>
        </button>
        {pageNumbers.map((number, i) => (
          <button style={pageButtonStyle} onClick={selectPage} key={number + 1} value={currentPage > 5 ? i + currentPage - 4 : i + 1}>
            {number}
          </button>
        ))}
        <button value={parseInt(currentPage + 1)} onClick={selectPage} style={sideButton} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="icon_svg"><path d="M9.75 17.58a1 1 0 01-.7-.28 1 1 0 010-1.42l3.8-3.88L9 8.12a1 1 0 111.41-1.42L15 11.3a1 1 0 010 1.4l-4.5 4.58a1 1 0 01-.75.3z"/></svg>
        </button>
      </div>
      <div style={pageInfoStyle}>
        {currentPage} of {Math.ceil(totalReviews / reviewsPerPage)}
      </div>
      <hr/>
    </div>
  );
};

export default Pagination;