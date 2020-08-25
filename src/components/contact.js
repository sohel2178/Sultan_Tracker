import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disable, setdisable] = useState(true);

  const handleChange = (e) => {
    const newContact = { ...contact };
    newContact[e.target.name] = e.target.value;

    newContact.name !== "" &&
    newContact.email !== "" &&
    newContact.message !== ""
      ? setdisable(false)
      : setdisable(true);
    setContact(newContact);
  };
  return (
    <Box
      id="contact"
      style={{
        padding: 10,
      }}
    >
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Leave a Message
      </Typography>

      <Box display="flex" style={{ margin: 20 }}>
        <Box display="flex" flexDirection="column" flexGrow="1">
          <Typography variant="h6">Name</Typography>
          <TextField
            style={{ width: "70ch" }}
            variant="outlined"
            label="Name:"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </Box>
        <Box display="flex" flexDirection="column" flexGrow="1">
          <Typography variant="h6">Email</Typography>
          <TextField
            style={{ width: "70ch" }}
            variant="outlined"
            label="Email:"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box display="flex" style={{ margin: 20 }}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">Message</Typography>
          <textarea
            style={{ margin: "0px", width: "1170px", height: "155px" }}
            variant="outlined"
            label="Message:"
            name="message"
            value={contact.message}
            onChange={handleChange}
          ></textarea>
          <Button
            style={{ marginTop: 10, width: 150 }}
            variant="contained"
            color="primary"
            disabled={disable}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
