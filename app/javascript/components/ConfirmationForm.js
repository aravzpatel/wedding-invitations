import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ConfirmationForm = ({ guests, guestNumber }) => {
  const [isAttending, setAttending] = useState(null);

  const [dietaryRequirements, setDietaryRequirements] = useState(null);
  const [otherDietRequirement, setOtherDietRequirement] = useState("");

  console.log(otherDietRequirement);

  return (
    <div>
      <div>
        <h1>
          Kindly reply by 15th May 2021 to let us know if you’ll be able to make
          it.
        </h1>
        <h3>
          {guests[guestNumber].first_name + " " + guests[guestNumber].last_name}
        </h3>
      </div>

      <form>
        <h2>Saturday 17th July, The Master Shipwrights House</h2>
        <p>Ceremony & Celebration</p>
        <p>Event Attendance</p>
        <div>
          <label>
            <input
              type="radio"
              id="attending-yes"
              name="attending-yes"
              value={isAttending === true}
              checked={isAttending === true}
              onChange={() => setAttending(true)}
              data-testid="yes"
            />
            Yes
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              id="attending-no"
              name="no"
              value={isAttending === false}
              checked={isAttending === false}
              onChange={() => setAttending(false)}
            />
            No
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              id="attending-maybe"
              name="maybe"
              value={isAttending === "covid"}
              checked={isAttending === "covid"}
              onChange={() => setAttending("covid")}
            />
            Hopefully, but I am travelling from overseas and if I need to
            quarantine I won’t be able to make it
          </label>
        </div>
        {isAttending && (
          <>
            <p>Dietary Requirements</p>
            <RadioInput
              label="None"
              value="none"
              onChange={setDietaryRequirements}
              state={dietaryRequirements}
            />
            <RadioInput
              label="Vegetarian"
              value="vegetarian"
              onChange={setDietaryRequirements}
              state={dietaryRequirements}
            />
            <RadioInput
              label="Vegan"
              value="vegan"
              onChange={setDietaryRequirements}
              state={dietaryRequirements}
            />
            <RadioInput
              label="Gluten Free"
              value="gluten free"
              onChange={setDietaryRequirements}
              state={dietaryRequirements}
            />
            <RadioInput
              label="Lactose Free"
              value="lactose free"
              onChange={setDietaryRequirements}
              state={dietaryRequirements}
            />
            <label>
              <input
                type="radio"
                value={dietaryRequirements === "other"}
                checked={dietaryRequirements === "other"}
                onChange={() => setDietaryRequirements("other")}
              />
              Other
              {dietaryRequirements === "other" && (
                <input
                  type="text"
                  value={otherDietRequirement}
                  placeholder="Enter here"
                  onChange={(e) => setOtherDietRequirement(e.target.value)}
                />
              )}
            </label>
          </>
        )}
      </form>
    </div>
  );
};

const RadioInput = ({ label, value, state, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        value={state === value}
        checked={state === value}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
};

export default ConfirmationForm;
