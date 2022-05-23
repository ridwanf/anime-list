import { createContext, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  setIsModalOpen: () => {},
  isModalCollectionOpen: false,
  setIsModalCollectionOpen: () => {}
})

export const ModalPorvider = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCollectionOpen, setIsModalCollectionOpen] = useState(false);
  const value = {isModalOpen, setIsModalOpen, isModalCollectionOpen, setIsModalCollectionOpen}

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}