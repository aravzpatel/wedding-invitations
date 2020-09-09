import React from 'react';
import Welcome from '../components/Welcome';
import renderer from 'react-test-renderer';

test('Welcome component creates a string of users', () => {
  const guests = [{first_name: 'Jack'}]
  const component = renderer.create(
    <Welcome guests = {guests}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})