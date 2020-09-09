import React from 'react';
import App from '../components/App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


it('App renders with welcome message', () => {
  const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}, {id: 2, first_name: 'Jill', last_name: 'Harper'}]
  const component = renderer.create(
    <App guests = {guests}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

it('App re-renders with correct forms', () => {
  const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}, {id: 2, first_name: 'Jill', last_name: 'Harper'}]
  const component = shallow(
    <App guests = {guests}/>
  )

  component.instance().changeView();

  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  component.instance().onRSVPSubmit()
  component.instance().onRSVPSubmit()

  expect(toJson(component)).toMatchSnapshot();

  component.instance().onAddressSubmit()
  expect(toJson(component)).toMatchSnapshot();

})

