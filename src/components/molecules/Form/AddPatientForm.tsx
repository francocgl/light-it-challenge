import { ReactElement } from "react"
import { Box, FormHelperText, Grid, TextField, Typography } from "@mui/material"
import { Field, Form, Formik, FormikHelpers } from "formik"
import { InitialValues } from "../../../types"
import { patientsFormInputs, validationSchema } from "./helpers"
import FormButtons from "./FormButtons"

interface AddPatientFormProps {
  handleCloseModal: () => void
  handleSubmit: (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>
  ) => void
}

const AddPatientForm = ({
  handleCloseModal,
  handleSubmit,
}: AddPatientFormProps): ReactElement => {
  const initialValues: InitialValues = {
    avatar: "",
    description: "",
    name: "",
    website: "",
  }

  return (
    <Box p={2}>
      <Typography variant="h5" component="h2">
        Add a patient
      </Typography>
      <Typography sx={{ mt: 1, mb: 2 }}>
        Please fill out all the fields.
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
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
                primaryButton="Add Patient"
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

export default AddPatientForm
