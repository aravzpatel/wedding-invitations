import React from "react";

const Details = () => {
  return (
    <div>
      <div className="detail-container">
        <div>
          <div className="detail-header">CEREMONY & CELEBRATION</div>
          <p className="detail-subcopy"> The main event</p>
          <p>
            <strong>Date:</strong> Saturday, 17th July
          </p>
          <p>
            <strong>Venue:</strong> Master Shipwrights Palace
          </p>
          <p>
            <strong>Address:</strong> Watergate St, Deptford, SE8 3JF
          </p>
          <p>
            <strong>Arrive:</strong> 11.30 AM
          </p>
          <p>
            <strong>End:</strong> 11 PM
          </p>
          <p>
            <strong>Dress:</strong> Your best. Ditch the suit and come correct
          </p>
        </div>
        <div className="detail-hog">
          <div className="detail-header">HOG ROAST</div>
          <p className="detail-subcopy">
            Wind down the next day at our local pub
          </p>
          <p>
            <strong>Date:</strong> Sunday, 18th July
          </p>
          <p>
            <strong>Venue:</strong>The Dog & Bell
          </p>
          <p>
            <strong>Address:</strong> 116 Prince St, Deptford, SE8 3JD
          </p>
          <p>
            <strong>Arrive:</strong> 1 PM
          </p>
          <p>
            <strong>Dress:</strong> Chill
          </p>
        </div>
      </div>

      <div className="detail-hog">
        <div className="detail-header">GETTING THERE</div>
        <p className="detail-subcopy">
          It's a family affair. We're keeping it local with both venues 5 mins
          walk from our house
        </p>
        <p>
          <strong>Train:</strong> Deptford train station (10 mins walk)
        </p>
        <p>
          <strong>Boat:</strong> Greenwich Pier (20 mins walk)
        </p>
        <p>
          <strong>By Car:</strong> Free parking on Watergate Street
        </p>
      </div>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.1406976999137!2d-0.027755353644098753!3d51.483869555283334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602f29d42d8fb%3A0x7cc76a93a88cb10e!2sMaster%20Shipwright&#39;s%20Palace!5e0!3m2!1sen!2suk!4v1619373354510!5m2!1sen!2suk"
          width="100%"
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
