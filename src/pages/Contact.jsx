import "../styles/contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    whatsapp: "",
    email: "",
    classApplying: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_iv59f9a", //service ID
        "gurukulam_enquiry", //template ID
        form.current,
        "jGn3gqjdJbmvIIngY" // public key
      )
      .then((result) => {
        console.log("success: ", result.text);
        setStatus({
          type: "success",
          message:
            "Thank you! your enquiry has been sent successfully. We will contact you soon.",
        });
        // reset form
        setFormData({
          parentName: "",
          studentName: "",
          phone: "",
          whatsapp: "",
          email: "",
          classApplying: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("failed:", error.text);
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again or callus directly.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="enquiry-form-container">
      <h2 data-aos="zoom-in">Enquiry Form</h2>
      <p data-aos="zoom-in">
        Fill the details and our admission team will get in touch with you
        shortly.
      </p>

      {status.message && (
        <div className={`status-message ${status.type}`}>{status.message}</div>
      )}

      <form ref={form} onSubmit={handleSubmit} data-aos="fade-up">
        <div className="form-row" data-aos="fade-up">
          <input
            type="text"
            name="parentName"
            placeholder="Parent's Full Name *"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="studentName"
            placeholder="Student's Full Name *"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row" data-aos="fade-up">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          data-aos="fade-up"
        />

        <select
          name="classApplying"
          value={formData.classApplying}
          onChange={handleChange}
          required
          data-aos="fade-up"
        >
          <option value="">Applying for Class *</option>
          <option value="Class IV">Class IV</option>
          <option value="Class V">Class V</option>
          <option value="Class VI">Class VI</option>
          <option value="Class VII">Class VII</option>
          <option value="Class VIII">Class VIII</option>
          <option value="Class IX">Class IX</option>
          <option value="Class X">Class X</option>
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Any message or query (optional)"
          value={formData.message}
          onChange={handleChange}
          data-aos="fade-up"
        />

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
          // data-aos="zoom-in"
        >
          {loading ? "Sending..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};
