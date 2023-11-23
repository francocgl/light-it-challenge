import { ReactElement } from "react"
import { Button, Grid, Typography } from "@mui/material"

interface HeaderProps {
  onClick: () => void
}

const Header = ({ onClick }: HeaderProps): ReactElement => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
      p={[0, 4]}
      pt={[2, 4]}
      pb={[2, 4]}
    >
      <Grid item xs={12} mb={2}>
        <Typography variant="h1">Light It Patients</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={2} mb={2} sx={{ textAlign: "center" }}>
        <Button variant="contained" onClick={onClick} fullWidth>
          Add Patient
        </Button>
      </Grid>
    </Grid>
  )
}

export default Header
