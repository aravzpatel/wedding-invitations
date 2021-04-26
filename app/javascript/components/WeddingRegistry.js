import React, { useState } from "react";
import axios from "axios";

const WeddingRegistry = ({ RSVPYes, onViewDetails, fromHomepage }) => {
  const openRegistery = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <div>
      <div>
        <p className="gift-header">
          You're presence is all that is needed, but if you want to we'd love a
          donation to our future growth fund or buying us a gift
        </p>
      </div>
      <div className="gift-button-wrapper">
        <button type="button" className="gift-button">
          Make a donation
        </button>
        <button type="button" onClick={openRegistery} className="gift-button">
          Thinking of buying a gift?
        </button>
      </div>
    </div>
  );
};

export default WeddingRegistry;
