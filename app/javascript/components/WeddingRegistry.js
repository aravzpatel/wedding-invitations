import React, { useState } from "react";
import axios from "axios";

const WeddingRegistry = ({ guests, RSVPYes, onViewDetails }) => {
  const openRegistery = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <div>
      <h1>Thank you for confirming</h1>
      {guests.length === RSVPYes && (
        <>
          <h3>We're delighted you can make it</h3>
          <button type="button" onClick={onViewDetails}>
            View more details
          </button>
        </>
      )}
      <button type="button" onClick={openRegistery}>
        Thinking of buying a gift?
      </button>
    </div>
  );
};

export default WeddingRegistry;
