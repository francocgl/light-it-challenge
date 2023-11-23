import { FC, ReactElement } from "react"
import { Grid, Typography } from "@mui/material"

const Footer: FC = (): ReactElement => {
  return (
    <Grid container>
      <Grid item xs={12} p={[2, 6]} sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2" color="secondary">
          Developed by Franco Cagliolo
        </Typography>
        <Typography variant="body2" color="secondary">
          copy@2023 | Light-it Challenge
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
