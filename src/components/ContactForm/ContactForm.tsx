import {Button, CssBaseline, Grid, TextField, Typography} from "@mui/material"
import React from "react"

export const ContactForm = () => {
  return (
    <div>
      <CssBaseline />
      <Typography
        variant="h4"
        align="center"
        component="h1"
        gutterBottom
        style={{marginTop: "20px"}}
      >
        {"Contact Us".toUpperCase()}
      </Typography>
      <Grid container xs={12} justifyContent="center">
        <Grid item xs={10}>
          <form id="contact-form" onSubmit={() => alert("Submit clicked")}>
            <Grid item>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="userName"
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                margin="normal"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id="message"
                label="Message"
                name="message"
                margin="normal"
                multiline
                rows={8}
              />
            </Grid>
            <Grid
              container
              direction="row"
              xs={12}
              spacing={2}
              style={{marginTop: 20}}
              justifyContent="right"
            >
              <Grid item>
                <Button type="reset" variant="contained" color="primary">
                  RESET
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactForm
