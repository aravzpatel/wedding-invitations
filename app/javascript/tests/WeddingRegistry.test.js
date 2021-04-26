import { render, screen } from "@testing-library/react";
import React from "react";
import WeddingRegistry from "../components/WeddingRegistry";

describe("when the user has RSVP'd yes", () => {
  beforeAll(async () => {
    const guests = [{ id: 1, first_name: "Jack", last_name: "Harper" }];
    const guestNumber = 0;
    render(<WeddingRegistry RSVPYes={1} guests={guests} />);
  });

  it("has a test", async () => {
    await screen.findByText("presence", { exact: false });
  });
});
