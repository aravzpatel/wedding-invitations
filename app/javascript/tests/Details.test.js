import { render, screen } from "@testing-library/react";
import React from "react";
import Details from "../components/Details";

describe("when the user has RSVP'd yes", () => {
  beforeAll(async () => {
    const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
    const guestNumber = 0;
    render(<Details RSVPYes={1} guests={guests} />);
    await screen.findByText("Ceremony & Celebration");
  });

  it("shows them the option to visit the gift registry or view venue details", async () => {});
});
