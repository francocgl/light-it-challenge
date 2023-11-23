import { ReactElement, useState } from "react"
import {
  AddPatientForm,
  FormMessage,
  EditPatientForm,
  ModalFormContainer,
} from "../molecules"
import { InitialValues } from "../../types"
import { Patient } from "../../types/patient"
import { useAddPatientMutation, useEditPatientMutation } from "../../hooks"

interface PatientsModalFormProps {
  handleCloseModal: () => void
  currentPatient?: Patient
}

const PatientsModalForm = ({
  currentPatient,
  handleCloseModal,
}: PatientsModalFormProps): ReactElement => {
  const [isError, setIsError] = useState(null)
  const [isSuccess, setIsSuccess] = useState(null)
  const editPatientMutation = useEditPatientMutation()
  const addPatientMutation = useAddPatientMutation()

  const handleSubmit = async (
    values: InitialValues,
    { setSubmitting, resetForm }
  ) => {
    try {
      await addPatientMutation
        .mutateAsync({ values })
        .then(() => setIsSuccess("Patient added successfully!"))

      resetForm()
    } catch (error) {
      setIsError(`Error adding patient: ${error}`)
    } finally {
      setSubmitting(false)
    }
  }

  const handleEditPatient = async (
    patientId: string,
    values: InitialValues,
    { setSubmitting, resetForm }
  ) => {
    try {
      await editPatientMutation
        .mutateAsync({ patientId: patientId, values })
        .then(() => setIsSuccess("Patient edited successfully!"))

      resetForm()
    } catch (error) {
      setIsError(`Error editing patient: ${error}`)
    } finally {
      setSubmitting(false)
    }
  }

  const resetValues = () => {
    setIsError(null)
    setIsSuccess(null)
    handleCloseModal()
  }

  if (isError) {
    return (
      <ModalFormContainer>
        <FormMessage message={isError} onClick={resetValues} />
      </ModalFormContainer>
    )
  }

  if (isSuccess) {
    return (
      <ModalFormContainer>
        <FormMessage message={isSuccess} onClick={resetValues} />
      </ModalFormContainer>
    )
  }

  return (
    <ModalFormContainer>
      {currentPatient ? (
        <EditPatientForm
          handleEditPatient={handleEditPatient}
          handleCloseModal={handleCloseModal}
          initialValues={currentPatient}
        />
      ) : (
        <AddPatientForm
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      )}
    </ModalFormContainer>
  )
}

export default PatientsModalForm
