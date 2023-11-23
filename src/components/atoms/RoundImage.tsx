import { ReactElement } from "react"
import { Box, Grid } from "@mui/material"

interface RoundImageProps {
  image: string
  name: string
}

const RoundImage = ({ image, name }: RoundImageProps): ReactElement => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          overflow: "hidden",
          border: "1.5px solid black",
        }}
      >
        <img src={image} alt={`Image of ${name}`} />
      </Box>
    </Grid>
  )
}

export default RoundImage
