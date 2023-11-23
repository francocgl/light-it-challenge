import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { InitialValues } from "../types"
import { PATIENTS_URL } from "../config/endpoints"

const useAddPatientMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ values }: { values: InitialValues }) => {
      await axios.post(PATIENTS_URL, values)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["patients"])
    },
  })
}

export default useAddPatientMutation
