import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  avatar: Yup.string()
    .url("Invalid Avatar URL")
    .required("Avatar URL is required"),
  description: Yup.string().required("Description is required"),
  name: Yup.string().required("Name is required"),
  website: Yup.string()
    .url("Invalid website URL")
    .required("Website URL is required"),
})

export const patientsFormInputs = [
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Avatar",
    name: "avatar",
  },
  {
    label: "Description",
    name: "description",
  },
  {
    label: "Website",
    name: "website",
  },
]
