import { createContext, useState, ReactNode } from "react"

export interface Context {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

const initialModalState: Context = {
  isModalOpen: false,
  setIsModalOpen: () => {},
}

export const MainContext = createContext<Context>(initialModalState)

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <MainContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </MainContext.Provider>
  )
}
