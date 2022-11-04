import {Typography, Stack, Box} from "@mui/material"
import React, {ReactElement, useState} from "react"
import {ProductCard} from "components/ProductCard"

export const Schedule = (): ReactElement => {
  const products = [
    "Compacted Asphalt",
    "Pea Gravel",
    "Medium Gravel",
    "Large Gravel",
    "Topsoil",
    "Red Bark",
    "Black Bark",
    "Brown Bark"
  ]

  const [selectedProduct, setSelectedProduct] =
    useState<string>("Compacted Asphalt")

  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        component="h1"
        gutterBottom
        style={{marginTop: "20px"}}
      >
        {"Schedule".toUpperCase()}
      </Typography>
      <Box sx={{width: "100%"}}>
        <Stack
          direction="row"
          spacing={2}
          style={{maxWidth: "80%", overflow: "auto", marginLeft: "10%"}}
        >
          {products.map((product) => (
            <ProductCard
              title={product}
              key={`pc-${product}`}
              selected={product.toLowerCase() === selectedProduct.toLowerCase()}
              onSelect={() => setSelectedProduct(product.toLowerCase())}
            />
          ))}
        </Stack>
      </Box>
    </div>
  )
}

export default Schedule
