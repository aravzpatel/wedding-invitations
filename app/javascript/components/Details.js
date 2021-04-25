import React, { useState } from "react";

const Details = () => {
  return (
    <div>
      <div>
        <h1>Ceremony & Celebration</h1>
        <p>The main event</p>
        <p>Date: Saturday, 17th July</p>
        <p>Venue: Master Shipwrights Palace</p>
        <p>Address: Watergate St, Deptford, SE8 3JF</p>
        <p>Arrive: 11.30 AM</p>
        <p>End: 11 PM</p>
        <p>Dress: Your best. Ditch the suit and come correct</p>
      </div>
      <div>
        <h1>Hog Roast</h1>
        <p>Wind down the next day at our local pub</p>
        <p>Date: Sunday, 18th July</p>
        <p>Venue: The Dog & Bell</p>
        <p>Address: 116 Prince St, Deptford, SE8 3JD</p>
        <p>Arrive: 1 PM</p>
        <p>Dress: Chill</p>
      </div>

      <div>
        <h1>Getting There</h1>
        <p>
          It's a family affair. We're keeping it local with both venues 5 mins
          walk from our house
        </p>
        <p>Train: Deptford train station (10 mins walk)</p>
        <p>Boat: Greenwich Pier (20 mins walk)</p>
        <p>By Car: Free parking on Watergate Street</p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.1406976999137!2d-0.027755353644098753!3d51.483869555283334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602f29d42d8fb%3A0x7cc76a93a88cb10e!2sMaster%20Shipwright&#39;s%20Palace!5e0!3m2!1sen!2suk!4v1619373354510!5m2!1sen!2suk"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
