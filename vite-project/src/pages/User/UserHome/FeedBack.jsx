// FeedbackForm.js
import React from 'react';
import './FeedBack.css'; // Import the CSS file

const FeedbackForm = () => {
  return (
    <div className="container-a bg-amber-200">
      <div className="image-section">
        <img src="data:image/jpeg;base64,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" alt="Toystore" />
      </div>
      <div className="form-section">
        <h2 className="font-semibold text-1xl sm:text-0xl md:text-2xl lg:text-2xl">Feedback Form</h2>
        <form>
          <label className='label-a' htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label  className='label-a' htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label className='label-a'  htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;