import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameIsValid = name.trim() !== "";
    const emailIsValid = email.trim() !== "";
    const messageIsValid = message.trim() !== "";

    setNameError(!nameIsValid);
    setEmailError(!emailIsValid);
    setMessageError(!messageIsValid);

    if (!nameIsValid || !emailIsValid || !messageIsValid) {
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_e3zyffr",
        "template_l9teq19",
        templateParams,
        "bz3KGX8Uie79f7dcq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact">
      <div className="content single-page">
        <div className="block-hero">
          <div className="subtitle">Contact</div>
          <h1>Get in touch</h1>
          <p>Send me a message below and I’ll get back to you shortly!</p>
        </div>
        <div className="contact_wrapper">
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
