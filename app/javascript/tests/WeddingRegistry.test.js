import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
  screen,
  getByLabelText,
} from "@testing-library/react";
import React from "react";
import WeddingRegistry from "../components/WeddingRegistry";

describe("when the user has RSVP'd yes", () => {
  let component, attending, notAttending, quarantineDependent;
  beforeAll(async () => {
    const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
    const guestNumber = 0;
    render(<WeddingRegistry RSVPYes={1} guests={guests} />);
    await screen.findByText("Thank you for confirming");
    await screen.findByText("We're delighted you can make it");
  });

  it("shows them the option to visit the gift registry or view venue details", async () => {
    await screen.findByText("Thinking of buying a gift?");
    await screen.findByText("View more details");
  });
});
