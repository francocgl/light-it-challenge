import { ReactElement } from "react"
import { Button, Box, Typography } from "@mui/material"

interface FormMessageProps {
  message: string
  onClick: () => void
}

const FormMessage = ({ message, onClick }: FormMessageProps): ReactElement => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        {message}
      </Typography>
      <Button color="secondary" onClick={onClick} variant="contained" fullWidth>
        Close
      </Button>
    </Box>
  )
}

export default FormMessage
