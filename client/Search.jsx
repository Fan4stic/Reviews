import React from 'react';
import styles from './style.css';


const searchSVG = {
  background: '#F40D15',
  padding: '12px',
  borderRadius: '0px 4px 4px 0px',
  border: 'none',
  float: 'left'

};

const buttonSVG = {
  background: '#F40D15',
  border: 'none'
};
const optionText = {
  color: 'teal',
  fontWeight: '700',
  fontSize: '15px',
  border: 'none',
  float: 'right'
};

const Search = (props) => (
  <div>
    <h2>Recommended Reviews</h2>
    <div className='notifybox'>
      <svg fill='#d32323' xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="iconsvg"><path d="M18.803 12.49l-4.162 1.194c-.801.229-1.451-.666-.986-1.357l2.422-3.59a.893.893 0 011.329-.172 7.685 7.685 0 011.969 2.709.894.894 0 01-.572 1.216zm-4.187 2.627l4.117 1.338a.893.893 0 01.531 1.233 7.762 7.762 0 01-2.059 2.639.894.894 0 01-1.326-.215l-2.296-3.674c-.441-.706.241-1.578 1.033-1.321zm-3.996-3.641L6.551 4.429a.893.893 0 01.387-1.251 12.475 12.475 0 014.386-1.175.892.892 0 01.96.89v8.137c0 .913-1.208 1.236-1.664.446zm-.714 3.476L5.704 16a.894.894 0 01-1.103-.767 7.681 7.681 0 01.351-3.331.892.892 0 011.237-.515l3.892 1.898c.749.365.633 1.466-.175 1.667zm.738 1.229c.557-.619 1.584-.204 1.555.628l-.151 4.329a.894.894 0 01-1.041.85 7.76 7.76 0 01-3.103-1.256.893.893 0 01-.157-1.333l2.897-3.218z"/></svg>
      <span>Your trust is our top concern,</span>
      <span> so businesses can't pay to alter or remove their reviews. </span>
      <span className='learnMore'>Learn more.</span>
    </div>
    <br></br>
    <div className="searchGrid">
      <form>
        <input className="searchBar" type='text' placeholder="Search within Reviews" />
        <svg style={searchSVG} onClick={()=>console.log('search')} fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="iconsvg"><path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"/></svg>
      </form>
      <div>
        <span style={{fontWeight: '300', fontSize: '14px', float: 'left'}}>Sort by
          <select style={optionText}>
            <option>Yelp Sort</option>
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
            <option>Elites</option>
          </select>
        </span>
      </div>
    </div>
  </div>

);

export default Search;