//build form component so that has a form with one input
//test that when submit it calls the right end point

import ConfirmationForm from "../components/ConfirmationForm";
import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
  screen,
  getByLabelText,
} from "@testing-library/react";
import React from "react";
import axios from "axios";

describe("When a user reaches the confirmation form", () => {
  describe("when a user submits the form", () => {
    let component, attending, notAttending, quarantineDependent;
    beforeAll(async () => {
      const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
      const guestNumber = 0;
      render(<ConfirmationForm guests={guests} guestNumber={guestNumber} />);
      await screen.findByText(
        "Kindly reply by 15th May 2021 to let us know if you’ll be able to make it."
      );
    });

    it("has the first name in the form & initial options", async () => {
      await screen.findByText("Jack", { exact: false });
      attending = screen.getByLabelText("Yes");
      notAttending = screen.getByLabelText("No");
      quarantineDependent = screen.getByLabelText("Hopefully", {
        exact: false,
      });
    });
  });

  describe("when a user selects attending or probably", () => {
    beforeAll(async () => {
      const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
      const guestNumber = 0;
      render(<ConfirmationForm guests={guests} guestNumber={guestNumber} />);
      await screen.findByText(
        "Kindly reply by 15th May 2021 to let us know if you’ll be able to make it."
      );
      fireEvent.click(screen.getByLabelText("Yes"));
    });

    it("shows further options", async () => {
      //Dietary
      await screen.findByText("Dietary Requirements");
      await screen.findByText("None");
      await screen.findByText("Vegetarian");
      await screen.findByText("Vegan");
      await screen.findByText("Gluten Free");
      await screen.findByText("Lactose Free");
      await screen.findByText("Other");

      //Sunday
      const yes = screen.getAllByLabelText("Yes");
      expect(yes.length).toEqual(2);
      const no = screen.getAllByLabelText("No");
      expect(no.length).toEqual(2);
      const quarantineDependent = screen.getAllByLabelText("Hopefully", {
        exact: false,
      });
      expect(quarantineDependent.length).toEqual(2);
    });
  });

  describe("when a user submits a form", () => {
    beforeAll(async () => {
      const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
      const guestNumber = 0;
      render(<ConfirmationForm guests={guests} guestNumber={guestNumber} />);
      await screen.findByText(
        "Kindly reply by 15th May 2021 to let us know if you’ll be able to make it."
      );
      fireEvent.click(screen.getByLabelText("Yes"));
      await screen.findByText("Dietary Requirements");
      fireEvent.click(screen.getByLabelText("Lactose Free"));
      const allYesInputs = screen.getAllByLabelText("Yes");
      fireEvent.click(allYesInputs[1]);
    });

    jest.mock("axios");

    it("makes a request to the backend", async () => {
      fireEvent.click(screen.getByText("Submit"));
      axios.post = jest.fn().mockResolvedValue({ status: 201 });
      await expect(axios.post).toHaveBeenCalledTimes(1);
    });
  });
});
