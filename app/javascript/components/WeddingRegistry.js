import React, { useState } from "react";
import axios from "axios";

const WeddingRegistry = ({ RSVPYes, onViewDetails, fromHomepage }) => {
  const openRegistery = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <div>
      {!fromHomepage && <h1>Thank you for confirming</h1>}
      {!fromHomepage && RSVPYes > 0 && (
        <>
          <h3>We're delighted you can make it</h3>
          <button type="button" onClick={onViewDetails}>
            View more details
          </button>
        </>
      )}

      {!fromHomepage && RSVPYes === 0 && (
        <>
          <h3>We're sorry that you can't make it.</h3>
          <h4>We look forward to celebrating with you at a later date.</h4>
        </>
      )}
      <div>
        <p>
          You're presence is all that is needed, but if you want to give us
          something think about making a donation or buying us a gift
        </p>
        <button type="button">Make a donation</button>
        <button type="button" onClick={openRegistery}>
          Thinking of buying a gift?
        </button>
      </div>
    </div>
  );
};

export default WeddingRegistry;
