import {Typography} from "@mui/material"
import React, {ReactElement} from "react"

export const Pricing = (): ReactElement => {
  return (
    <Typography
      variant="h4"
      align="center"
      component="h1"
      gutterBottom
      style={{marginTop: "20px"}}
    >
      {"Pricing".toUpperCase()}
    </Typography>
  )
}

export default Pricing
