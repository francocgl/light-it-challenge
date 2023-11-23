import { Box, Modal } from "@mui/material"
import { ReactElement, ReactNode, useContext } from "react"
import { MainContext } from "../../../MainContext"

interface ModalFormContainerProps {
  children: ReactNode
}

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #efefef",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
}

const ModalFormContainer = ({
  children,
}: ModalFormContainerProps): ReactElement => {
  const { isModalOpen, setIsModalOpen } = useContext(MainContext)

  return (
    <Modal open={isModalOpen} onClose={setIsModalOpen}>
      <Box sx={modalStyle}>{children}</Box>
    </Modal>
  )
}

export default ModalFormContainer
