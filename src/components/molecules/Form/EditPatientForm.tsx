import { ReactElement } from "react"
import { Grid, Typography, TextField, FormHelperText, Box } from "@mui/material"
import { Field, Form, Formik, FormikHelpers } from "formik"
import { InitialValues } from "../../../types"
import RoundImage from "../../atoms/RoundImage"
import { patientsFormInputs, validationSchema } from "./helpers"
import FormButtons from "./FormButtons"

interface EditPatientFormProps {
  initialValues: InitialValues
  handleCloseModal: () => void
  handleEditPatient: (
    patientId: string,
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => void
}

const EditPatientForm = ({
  initialValues,
  handleEditPatient,
  handleCloseModal,
}: EditPatientFormProps): ReactElement => {
  const { id, avatar, name } = initialValues

  return (
    <Box p={2}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        {name}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) => {
          handleEditPatient(id, values, formikHelpers)
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <RoundImage image={avatar} name={name} />

              {patientsFormInputs.map(({ name, label }, index) => {
                return (
                  <Grid item xs={12} key={`${name}-${index}`}>
                    {name === "description" ? (
                      <Field
                        as={TextField}
                        name={name}
                        label={label}
                        fullWidth
                        multiline
                        rows={4}
                      />
                    ) : (
                      <Field
                        as={TextField}
                        name={name}
                        label={label}
                        fullWidth
                      />
                    )}
                    {errors[name] && touched[name] && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors[name]}
                      </FormHelperText>
                    )}
                  </Grid>
                )
              })}
              <FormButtons
                primaryButton="Edit Patient"
                secondaryButton="Cancel"
                primaryButtonDisabled={isSubmitting}
                secondaryButtonAction={handleCloseModal}
              />
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default EditPatientForm
