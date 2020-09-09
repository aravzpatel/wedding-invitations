import React from 'react';
import RsvpForm from '../components/RsvpForm';
import renderer from 'react-test-renderer';
import axios from 'axios'
import { shallow, mount } from 'enzyme';


test('Component builds form for one guest', () => {
  const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}]
  const component = renderer.create(
    <RsvpForm guests = {guests}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Component builds form for multiple guests', () => {
  const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}, {id: 2, first_name: 'Jill', last_name: 'Harper'}]
  const component = renderer.create(
    <RsvpForm guests = {guests}/>
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

jest.mock('axios')

it('Calls a put request to the database', async () => {
  axios.put.mockResolvedValue({
    status: 204
  })
  
  const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}]

  const component = mount(
    <RsvpForm guests = {guests}/>
  )

  const form = component.find('form')
  form.simulate('submit')

  await expect(axios.put).toHaveBeenCalledTimes(1)
  expect(axios.put).toHaveBeenCalledWith("/guests", {"id": "1", "first_name": 'Jack', "last_name": 'Harper', "email": '', "rsvp": false})
  
})