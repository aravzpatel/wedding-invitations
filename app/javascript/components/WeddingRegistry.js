import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/images/logo.svg";

const WeddingRegistry = ({ RSVPYes, onViewDetails, fromHomepage }) => {
  const openRegistery = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <div>
      <div>
        <p className="gift-header">
          You're presence is all that is needed. But if you want to, feel free
          to make a contribution to our future growth fund or buy us a gift.
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
      <div className="gift-logo">
        <Image src={Logo} className="rotate" />
      </div>
    </div>
  );
};

export default WeddingRegistry;
