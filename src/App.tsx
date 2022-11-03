import React, {ReactElement} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Home, Contact, Pricing, Schedule} from "./views"
import {TKAppBar} from "components/TKAppBar"

function App(): ReactElement {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
