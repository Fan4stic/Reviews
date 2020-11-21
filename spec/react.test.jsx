import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Reviews from '../client/Reviews';
import Stars from '../client/Stars';
import StartReview from '../client/StartReview';
import Pagination from '../client/Pagination';
import ListItem from '../client/ListItem';

describe('Reviews', () => {
  it('should show user image', () => {
    const wrapper = shallow(<Reviews />);

    expect(wrapper.find('img').prop('src')).toBe("https://s3-us-west-1.amazonaws.com/fec.yelp/yelpStyle/Imageye+-+Styleguide/empty_profile%402x.yji-f52f768da99ad105f2d4ad4190f25c31.png");
  });
  it('should render', ()=>{
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe('ListItem', () => {
  it('should open modal', () => {
    const component = mount(<ListItem />);

    expect(component.exists()).toBeTruthy();
  });
});

describe('Stars', () => {
  it('should open modal', () => {
    const component = mount(<Stars/>);

    expect(component.exists()).toBeTruthy();
  });
});

describe('Pagination', () => {
  it('should open modal', () => {
    const component = mount(<Pagination/>);

    expect(component.exists()).toBeTruthy();
  });
});