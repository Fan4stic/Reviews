import React from 'react';

const pageStyle = {
  borderColor   : 'transparent',
  display       : 'inline-block',
  cursor        : 'pointer',
  textAlign     : 'left',
  padding       : '10px',
  color         : '#f454545',
  verticalAlign : 'center'
};

const pageContainer = {
  display        : 'flex',
  flexDirection  : 'row',
  flexWrap       : 'nowrap',
  justifyContent : 'flex-start',
  alightItems    : 'center',
  alignContent   : 'left',
  height         : '30px',
  minWidth       : '26px',
  padding        : '0px 6px',
  cursor         : 'pointer'
};
const sideButton = {
  backgroundColor : 'transparent',
  border          : 'none',
  verticalAlign   : 'center',
  padding         : '7px',
  fill            : '#757280'
};

// const pageButtonStyle = {
//   backgroundColor: 'transparent',
//   border: 'none',
//   padding: '10px',
//   color: '#757280',
//   verticalAlign: 'center',
//   fontFamily: 'Open Sans, Helvetica Neue, sans-serif, arial',
//   fontSize: '16px',
//   fontWeight: '400',
//   cursor: 'pointer'
// };

// const currPageStyle = {
//   backgroundColor: 'transparent',
//   border: 'none',
//   padding: '10px',
//   color: 'black',
//   verticalAlign: 'center',
//   fontFamily: 'Open Sans, Helvetica Neue, sans-serif, arial',
//   fontSize: '16px',
//   fontWeight: '600',
//   cursor: 'pointer'
// };

const pageInfoStyle = {
  color     : '#757280',
  textAlign : 'right'
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
    let hiPage = currentPage + 4;
    let totalPages = Math.ceil(totalReviews / reviewsPerPage);
    if (totalPages < currentPage + 5) {
      hiPage = totalPages;
      console.log(hiPage);
    }
    for (var i = currentPage - 4; i <= hiPage; i++) {
      pageNumbers.push(i);
    }
  }

  const valueCalculator = (currPage, i) => {
    if (currPage > 5) {
      return parseInt(i + currPage - 4);
    } else {
      return parseInt(i + 1);
    }
  };

  return (
    <div>
      <hr />
      <div style={pageContainer} id="paginationContainer">
        <button className="pagenum" style={sideButton} value={parseInt(currentPage - 1) || 1} onClick={selectPage}>
          {' '}
          &lt;
        </button>
        {pageNumbers.map((number, i) => (
          <button
            className={valueCalculator(currentPage, i) === currentPage ? 'thisPage' : 'pagenum'}
            onClick={selectPage}
            key={number + 1}
            value={valueCalculator(currentPage, i)}
          >
            {number}
          </button>
        ))}
        <button className="pagenum" value={parseInt(currentPage + 1)} onClick={selectPage} style={sideButton}>
          {' '}
          >
        </button>
      </div>
      <div style={pageInfoStyle}>
        {currentPage} of {Math.ceil(totalReviews / reviewsPerPage)}
      </div>
      <hr />
    </div>
  );
};

export default Pagination;
