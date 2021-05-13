import React, { useState } from "react";
import axios from "axios";

const ConfirmationForm = ({ guests, guestNumber, onSubmit }) => {
  const [isAttendingEvening, setAttending] = useState(null);
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
  ];

  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    axios
      .put("/guests", {
        id: guests[guestNumber].id,
        evening_confirmation: isAttendingEvening,
        sunday: isAttendingSunday,
        diet: dietaryRequirements,
        otherdiet: otherDietRequirement,
      })
      .then((response) => {
        console.log(response);
        onSubmit();
        setAttending(null);
        setAttendingSunday(null);
        setDietaryRequirements(null);
        setOtherDietRequirement(null);
      }),
      (error) => {
        console.log(error);
      };
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <div className="confirmation-wrapper">
          <div className="confirmation-guests">
            {guests[guestNumber].first_name +
              " " +
              guests[guestNumber].last_name}
          </div>
        </div>

        <p className="confirmation-header">
          Kindly reply by 29th May 2021 to let us know if you’ll be able to make
          it.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-header">
          Saturday 17th July, The Master Shipwrights House
        </div>
        <div className="form-header">Evening Guest from 6pm</div>
        <div className="form-title">Event Attendance</div>
        <RadioGroup
          state={isAttendingEvening}
          onChange={setAttending}
          options={attendingOptions}
          id="saturday"
        />
        {isAttendingEvening && (
          <div className="form-second-section">
            <div className="form-title">Dietary Requirements</div>

            <RadioGroup
              state={dietaryRequirements}
              onChange={setDietaryRequirements}
              otherState={otherDietRequirement}
              otherOnChange={setOtherDietRequirement}
              options={dietaryOptions}
              id="diet"
            />
            <div className="form-sunday">
              <div className="form-header-second">
                Sunday 18th July, The Dog & Bell pub
              </div>
              <div className="form-header-second-bottom">Hog Roast</div>

              <RadioGroup
                state={isAttendingSunday}
                onChange={setAttendingSunday}
                options={attendingOptions}
                id="sunday"
              />
            </div>
          </div>
        )}
        <div className="form-submit-wrapper">
          {isAttendingEvening !== null && (
            <input type="submit" value="Submit" className="form-submit" />
          )}
        </div>
      </form>
    </div>
  );
};

const RadioInput = ({ label, value, state, onChange }) => {
  return (
    <label className="radio-input-container">
      <input
        type="radio"
        value={value}
        checked={state === value}
        onChange={() => onChange(value)}
      />
      {label}
      <span className="checkmark"></span>
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
