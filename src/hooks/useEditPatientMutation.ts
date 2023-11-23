import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { PATIENTS_URL } from "../config/endpoints"
import type { InitialValues } from "../types"

const useEditPatientMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      patientId,
      values,
    }: {
      patientId: string
      values: InitialValues
    }) => {
      await axios.put(`${PATIENTS_URL}/${patientId}`, values)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"])
    },
  })
}

export default useEditPatientMutation
