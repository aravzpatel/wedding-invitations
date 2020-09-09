import React from 'react';
import AddressForm from '../components/AddressForm';
import renderer from 'react-test-renderer';

it('Thankyou component renders without an rsvp button', () => {
  const party = {slug: 'RavingLooneyParty'}
  
  const component = renderer.create(
    <AddressForm party={party}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})