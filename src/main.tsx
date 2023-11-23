import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "@mui/material/styles"
import "./index.css"
import customTheme from "./customTheme.ts"
import PatientsGrid from "./components/templates/PatientsGrid.tsx"
import { MainContextProvider } from "./MainContext"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <QueryClientProvider client={queryClient}>
    <MainContextProvider>
      <ThemeProvider theme={customTheme}>
        <PatientsGrid />
      </ThemeProvider>
    </MainContextProvider>
  </QueryClientProvider>
)
