import React, { useContext } from 'react'
import { CollectionContext } from '../../contexts/collection.context'
import { ModalContext } from '../../contexts/modal.context'
import ModalCollection from '../modal-add-collection/modal-add-collection.component'
import './modal-add-item.styles.css'

const ModalAddItem = ({show, onClose, anime}) => {
  const {collections, addItemToCollectionItem} = useContext(CollectionContext)
  const {setIsModalCollectionOpen, isModalCollectionOpen} = useContext(ModalContext)
  const setModalCollectionOpen = (isOpen) => setIsModalCollectionOpen(isOpen);
  const addNewCollection = () => {
    setIsModalCollectionOpen(true)
  },
  addToCollectionItem = (name, anime) => {
    addItemToCollectionItem(name, anime)
  }
  if (!show) {
    return null
  } else {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h4 className="modal-title">
            Add To Collection
          </h4>
          <div className="modal-body">
            {collections &&
              collections.map((collection, index) => (
                <div key={index} onClick={() => addToCollectionItem(collection.name, anime)}>
                  {collection.name}
                </div>
              ))
            }
          </div>
          <div className="modal-footer">
           <span onClick={addNewCollection}> + Create New Collection </span> 
          </div>
        </div>
        <ModalCollection
          show={isModalCollectionOpen}
          onClose={() => setModalCollectionOpen(false)}
        />
      </div>
    )
  }
  
}

export default ModalAddItem
