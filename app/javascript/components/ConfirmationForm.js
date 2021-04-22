import React, { useState } from "react";
import axios from "axios";

const ConfirmationForm = ({ guests, guestNumber }) => {
  const [isAttendingWedding, setAttending] = useState(null);
  const [isAttendingSunday, setAttendingSunday] = useState(null);
  const [dietaryRequirements, setDietaryRequirements] = useState(null);
  const [otherDietRequirement, setOtherDietRequirement] = useState("");

  const dietaryOptions = [
    { value: "none", label: "None" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "gluten", label: "Gluten Free" },
    { value: "lactose", label: "Lactose Free" },
    { value: "other", label: "Other" },
  ];

  const attendingOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
    {
      value: "quarantine",
      label:
        "Hopefully, but I am travelling from overseas and if I need to quarantine I won’t be able to make it",
    },
  ];

  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    axios
      .put("/guests", {
        id: guests[guestNumber].id,
        confirmation: isAttendingWedding,
        sunday: isAttendingSunday,
        diet: dietaryRequirements,
      })
      .then((response) => {
        console.log(response);
      }),
      (error) => {
        console.log(error);
      };
    event.preventDefault();
  };

  console.log(guests);

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

      <form onSubmit={handleSubmit}>
        <h2>Saturday 17th July, The Master Shipwrights House</h2>
        <p>Ceremony & Celebration</p>
        <p>Event Attendance</p>
        <RadioGroup
          state={isAttendingWedding}
          onChange={setAttending}
          options={attendingOptions}
          id="saturday"
        />
        {isAttendingWedding && (
          <>
            <p>Dietary Requirements</p>
            <RadioGroup
              state={dietaryRequirements}
              onChange={setDietaryRequirements}
              otherState={otherDietRequirement}
              otherOnChange={setOtherDietRequirement}
              options={dietaryOptions}
              id="diet"
            />
            <h2>Sunday 18th July, The Dog and Bell pub</h2>
            <p>Hog Roast</p>
            <RadioGroup
              state={isAttendingSunday}
              onChange={setAttendingSunday}
              options={attendingOptions}
              id="sunday"
            />
          </>
        )}
        {isAttendingWedding !== null && <input type="submit" value="Submit" />}
      </form>
    </div>
  );
};

const RadioInput = ({ label, value, state, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={state === value}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
};

const RadioGroup = ({
  state,
  onChange,
  otherState,
  otherOnChange,
  options,
  id,
}) => {
  return options.map((option) => {
    const specificID = `${id}_${option.value}`;
    return (
      <div key={specificID}>
        <RadioInput
          label={option.label}
          value={option.value}
          state={state}
          onChange={onChange}
        />
        {state === "other" && option.value === "other" && (
          <input
            type="text"
            value={otherState}
            placeholder="Enter here"
            onChange={(e) => otherOnChange(e.target.value)}
          />
        )}
      </div>
    );
  });
};

export default ConfirmationForm;
