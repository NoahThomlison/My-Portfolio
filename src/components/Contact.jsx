import {
  Container,
  Box,
  Paper,
  ThemeProvider,
  Button,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";

function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});
  const validate = (formData) => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name required";
    }
    if (!formData.email) {
      formErrors.email = "Email required";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }
    return formErrors;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setErrors(validate(formData));
    setIsSubmitted(true);
    e.preventDefault();
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...formData }),
      })
        .then(() => console.log("Success!"))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ name: "", email: "", message: "" }))
        .catch((error) => console.log(error));
    }
  }, [errors, formData, isSubmitted]);

  return (
    <div className="section aboutMeImage">
      <ThemeProvider theme={theme}>
        <Container>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: ".75em",
              minHeight: "500px",
            }}
          >
            <Box
              className="underline"
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Typography variant="h6">Contact</Typography>
            </Box>
            <form className="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: ".75em",
                  minHeight: "500px",
                  width: "75vw",
                }}
              >
                <TextField
                  sx={{ width: "75%" }}
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
                <TextField
                  sx={{ width: "75%" }}
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <TextField
                  sx={{ width: "75%" }}
                  name="message"
                  id="message"
                  className="form-input"
                  label="Your Message"
                  value={formData.message}
                  multiline
                  rows={4}
                  onChange={handleChange}
                />
                {errors.message && <p>{errors.message}</p>}
                <Button
                  type="submit"
                  variant="outlined"
                  className="form-input-btn"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Contact;
