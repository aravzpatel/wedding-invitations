import React from "react";
import AddressForm from "../components/AddressForm";
import renderer from "react-test-renderer";
import axios from "axios";
import { shallow, mount } from "enzyme";

it("Thankyou component renders without an rsvp button", () => {
  const party = {slug: "RavingLooneyParty"};
  
  const component = renderer.create(
    <AddressForm party={party}/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


jest.mock("axios");

it("Calls a put request to the database", async () => {
  axios.put.mockResolvedValue({
    status: 204
  });
  
  const party = {slug: "RavingLooneyParty"};
  
  const component = mount(
    <AddressForm party={party}/>
  );

  const form = component.find("form");
  form.simulate("submit");

  await expect(axios.put).toHaveBeenCalledTimes(1);
  expect(axios.put).toHaveBeenCalledWith("/party", {"id": "RavingLooneyParty", "address_line_1": "", "address_line_2": "", "postcode": "", "town": "", "country": ""});
  
});