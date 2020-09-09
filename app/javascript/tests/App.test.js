import React from 'react';
import App from '../components/App';
import renderer from 'react-test-renderer';

it('App renders with welcome message', () => {
  const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}, {id: 2, first_name: 'Jill', last_name: 'Harper'}]
  const component = renderer.create(
    <App guests = {guests}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})