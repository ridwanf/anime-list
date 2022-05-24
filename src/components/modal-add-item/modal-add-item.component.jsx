import React, { Fragment, useContext } from 'react'
import { CollectionContext } from '../../contexts/collection.context'
import { ModalContext } from '../../contexts/modal.context'
import Btn from '../Btn/button.component'
import ModalCollection from '../modal-add-collection/modal-add-collection.component'
import Modal from '../modal/modal.component'
import './modal-add-item.styles.jsx'
import { ModalBody, ModalCollectionItem, ModalTitle } from './modal-add-item.styles.jsx'

const ModalAddItem = ({show, anime}) => {
  const {collections, addItemToCollectionItem} = useContext(CollectionContext)
  const {setIsModalOpen, isModalOpen, isModalCollectionOpen, setIsModalCollectionOpen} = useContext(ModalContext)
  const setModalCollectionOpen = (isOpen) => setIsModalCollectionOpen(isOpen);
  const addNewCollection = () => {
    setIsModalCollectionOpen(true)
  },
  addToCollectionItem = (name, anime) => {
    addItemToCollectionItem(name, anime)
    setIsModalOpen(false)
  }
  if (!show) {
    return null
  } else {
    return (
      <Fragment>

      <Modal onClose={() => setIsModalOpen(false)} show={isModalOpen}>
          <ModalTitle>
            Add To Collection
          </ModalTitle>
          <ModalBody>
            {collections &&
              collections.map((collection, index) => (
                <ModalCollectionItem key={index} onClick={() => addToCollectionItem(collection.name, anime)}>
                  {collection.name}
                </ModalCollectionItem>
              ))
            }
          </ModalBody>
          <div className="modal-footer">
           <Btn onClick={addNewCollection}> Create New Collection </Btn> 
          </div>
        <ModalCollection
          show={isModalCollectionOpen}
          onClose={() => setModalCollectionOpen(false)}
        />
      </Modal>
      </Fragment>

    )
  }
  
}

export default ModalAddItem
