import {Paper, styled, Typography} from "@mui/material"
import React from "react"

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}))

interface IProductCardProps {
  title: string
  selected: boolean
  onSelect: () => void
}

export const ProductCard = (props: IProductCardProps) => {
  return (
    <Item
      style={
        props.selected
          ? {
              minWidth: 250,
              maxWidth: 250,
              maxHeight: 200,
              minHeight: 200,
              backgroundColor: "rgba(40, 40, 255, 0.15)"
            }
          : {
              minWidth: 250,
              maxWidth: 250,
              maxHeight: 200,
              minHeight: 200
            }
      }
      onClick={props.onSelect}
    >
      <Typography variant="h4" align="center" component="h4">
        {props.title.toUpperCase()}
      </Typography>
    </Item>
  )
}

export default ProductCard
