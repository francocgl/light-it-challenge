import { ReactElement, ReactNode } from "react"
import { Grid } from "@mui/material"

interface MessageWrapperProps {
  children: ReactNode
}

const MessageWrapper = ({ children }: MessageWrapperProps): ReactElement => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Grid>
  )
}

export default MessageWrapper
