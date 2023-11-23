import { ReactElement, useContext, useState } from "react"
import { Grid, Typography } from "@mui/material"
import { Patient } from "../../types/patient"
import { useGetPatients } from "../../hooks"
import { MessageWrapper } from "../atoms"
import { Header, Footer } from "../molecules"
import { PatientCard, PatientsModalForm } from "../organisms"
import { MainContext } from "../../MainContext"

const PatientsGrid = (): ReactElement => {
  const { isLoading, isError, data: patients, error } = useGetPatients()
  const { setIsModalOpen } = useContext(MainContext)
  const [currentPatient, setCurrentPatient] = useState(null)

  const handleEditPatient = (id: string) => {
    const getPatientById = patients.find(
      (patient: Patient) => patient.id === id
    )
    setCurrentPatient(getPatientById)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setCurrentPatient(null)
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  if (isLoading) {
    return (
      <MessageWrapper>
        <Typography variant="h4">Loading...</Typography>
      </MessageWrapper>
    )
  }

  if (isError && error instanceof Error) {
    return (
      <MessageWrapper>
        <Typography variant="h4">Error: {error.message}</Typography>
      </MessageWrapper>
    )
  }

  return (
    <>
      <Header onClick={handleOpenModal} />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2} sx={{ maxWidth: "1200px" }}>
          {patients
            .slice(-15)
            .reverse()
            .map((patient: Patient) => (
              <Grid item key={patient.id} xs={12} sm={6} md={4}>
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  handleEditPatient={handleEditPatient}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
      <PatientsModalForm
        currentPatient={currentPatient}
        handleCloseModal={handleCloseModal}
      />
      <Footer />
    </>
  )
}

export default PatientsGrid
