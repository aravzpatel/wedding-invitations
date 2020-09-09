import React from 'react';
import RsvpForm from '../components/RsvpForm';
import renderer from 'react-test-renderer';
import $ from 'jquery';
import { shallow } from 'enzyme';


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


// jest.mock('jquery')
// test('Component calls API when information is filled in', () => {
//   // var $ = require('jquery')
//   const guests = [{id: 1, first_name: 'Jack', last_name: 'Harper'}]
//   const submit = jest.fn()

//   const spy = jest.spyOn(RsvpForm.prototype, 'handleSubmit');

//   const component = shallow(
//     <RsvpForm guests={guests} onSubmit={submit}/>
//   )
//   // const event = {}
//   component.instance().handleSubmit();
//   expect(spy).toHaveBeenCalled();


//   // const spy = jest.spyOn(component.instance(), "handleSubmit");
//   // component.instance().forceUpdate();
  
//   // const button = component.find('.rsvp-button')
//   // console.log(button.debug())

//   // button.click();

//   // console.log(button.debug())
  
//   // // console.log(component.debug())
//   // expect(spy).toHaveBeenCalled()
// })