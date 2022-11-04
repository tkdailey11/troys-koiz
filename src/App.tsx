import {createTheme, CssBaseline, ThemeProvider} from "@mui/material"
import React, {ReactElement} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Home, Contact, Pricing, Schedule} from "./views"
import {TKAppBar} from "components/TKAppBar"

function App(): ReactElement {
  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  })
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <TKAppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
