import React from "react";
import Thankyou from "../components/Thankyou";
import renderer from "react-test-renderer";

it("Thankyou component renders without an rsvp button", () => {
  const component = renderer.create(
    <Thankyou/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});