import { ReactElement } from "react"
import { Button, Grid } from "@mui/material"

interface FormButtonsProps {
  primaryButton: string
  primaryButtonDisabled: boolean
  secondaryButton: string
  secondaryButtonAction: () => void
}

const FormButtons = ({
  primaryButton,
  primaryButtonDisabled,
  secondaryButton,
  secondaryButtonAction,
}: FormButtonsProps): ReactElement => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          onClick={secondaryButtonAction}
        >
          {secondaryButton}
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          color="success"
          variant="contained"
          fullWidth
          type="submit"
          disabled={primaryButtonDisabled}
        >
          {primaryButton}
        </Button>
      </Grid>
    </>
  )
}

export default FormButtons
