//build form component so that has a form with one input
//test that when submit it calls the right end point

import ConfirmationForm from "../components/ConfirmationForm";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

describe("When a user reaches the confirmation form", () => {
  describe("when a user submits the form", () => {
    let component;
    beforeAll(async () => {
      const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
      const guestNumber = 0;
      component = render(
        <ConfirmationForm guests={guests} guestNumber={guestNumber} />
      );
      await component.findByText(
        "Kindly reply by 15th May 2021 to let us know if you’ll be able to make it."
      );
    });

    it("has the first name in the form", () => {
      component.findByText("Jack Harper");
    });

    it("has 3 options for attendance", () => {
      component.findByText("Yes");
      component.findByText("No");
      component.findByText(
        "Hopefully, but I am travelling from overseas and if I need to quarantine I won’t be able to make it"
      );
    });
  });
});
