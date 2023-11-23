import { useQuery } from "react-query"
import axios from "axios"
import { PATIENTS_URL } from "../config/endpoints"

const useGetPatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      const response = await axios.get(PATIENTS_URL)
      return response.data
    },
  })
}

export default useGetPatients
