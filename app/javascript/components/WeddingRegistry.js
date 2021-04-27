import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/images/logo.svg";

const WeddingRegistry = ({ thanks }) => {
  const openRegistery = () => {
    window.open("https://www.marriagegiftlist.com/EQZK9M", "_blank");
  };

  const openPool = () => {
    window.open("https://paypal.me/pools/c/8yY53NtLak", "_blank");
  };

  return (
    <div>
      <div>
        {thanks && (
          <p className="gift-header">
            Thanks for submitting your confirmation form.
          </p>
        )}

        <p className="gift-header">
          You're presence is all that is needed. But if you want to, feel free
          to make a contribution to our future growth fund or buy us a gift.
        </p>
      </div>
      <div className="gift-button-wrapper">
        <button type="button" onClick={openPool} className="gift-button">
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
