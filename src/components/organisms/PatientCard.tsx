import { ReactElement, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Link,
  Typography,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { parseDateFormat } from "../../helpers"
import { Patient } from "../../types/patient"
import RoundImage from "../atoms/RoundImage"

interface PatientCardProps {
  patient: Patient
  handleEditPatient: (id: string) => void
}

const editButtonStyle = {
  position: "absolute" as const,
  top: "10px",
  right: "10px",
  padding: "10px",
  background: "#000000",
  borderRadius: "50%",
  cursor: "pointer",
  color: "#ffffff",
  transition: "all ease-in-out 500ms",
  "&:hover": {
    opacity: "60%",
  },
}

const PatientCard = ({
  patient,
  handleEditPatient,
}: PatientCardProps): ReactElement => {
  const { name, avatar, description, id, createdAt, website } = patient
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <Card sx={{ position: "relative" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <RoundImage image={avatar} name={name} />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          Created at {parseDateFormat(createdAt)}
        </Typography>
        <Box>
          <Button onClick={() => setIsExpanded(!isExpanded)} fullWidth>
            Open Details{" "}
            <ExpandMoreIcon
              sx={{
                ml: "10px",
                transition: "all ease-in-out 300ms",
                transform: isExpanded ? "rotate(-180deg)" : "none",
              }}
            />
          </Button>
        </Box>
        <Collapse in={isExpanded}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, mt: 2 }}
          >
            {description}
          </Typography>
          <Link
            underline="none"
            href={website}
            target="_blank"
            variant="button"
          >
            Visit website
          </Link>
        </Collapse>
        <EditIcon sx={editButtonStyle} onClick={() => handleEditPatient(id)} />
      </CardContent>
    </Card>
  )
}

export default PatientCard
