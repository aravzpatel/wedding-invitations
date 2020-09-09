import React from "react";
import Welcome from "../components/Welcome";
import renderer from "react-test-renderer";

test("Welcome component creates a single string of 1 user", () => {
  const guests = [{first_name: "Jack"}];
  const component = renderer.create(
    <Welcome guests = {guests}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Welcome component combines two users into one string", () => {
  const guests = [{first_name: "Jack"}, {first_name: "Jill"}];
  const component = renderer.create(
    <Welcome guests = {guests}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});