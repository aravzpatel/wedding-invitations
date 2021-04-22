import React, { useState } from "react";
import axios from "axios";

const WeddingRegistry = ({ RSVPYes, onViewDetails }) => {
  const openRegistery = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <div>
      <h1>Thank you for confirming</h1>
      {RSVPYes > 0 && (
        <>
          <h3>We're delighted you can make it</h3>
          <button type="button" onClick={onViewDetails}>
            View more details
          </button>
        </>
      )}

      {RSVPYes === 0 && (
        <>
          <h3>We're sorry that you can't make it.</h3>
          <h4>We look forward to celebrating with you at a later date.</h4>
        </>
      )}
      <button type="button" onClick={openRegistery}>
        Thinking of buying a gift?
      </button>
    </div>
  );
};

export default WeddingRegistry;
