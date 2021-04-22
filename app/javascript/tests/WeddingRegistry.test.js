import { render, screen } from "@testing-library/react";
import React from "react";
import WeddingRegistry from "../components/WeddingRegistry";

describe("when the user has RSVP'd yes", () => {
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

describe("when the user has RSVP'd no", () => {
  beforeAll(async () => {
    const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
    const guestNumber = 0;
    render(<WeddingRegistry RSVPYes={0} guests={guests} />);
    await screen.findByText("Thank you for confirming");
    await screen.findByText("We're sorry that you can't make it.");
    await screen.findByText(
      "We look forward to celebrating with you at a later date."
    );
  });

  it("shows them the option to visit the gift registry or view venue details", async () => {
    await screen.findByText("Thinking of buying a gift?");
  });
});
