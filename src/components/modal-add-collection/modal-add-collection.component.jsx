import React, { useContext, useState } from "react";
import { CollectionContext } from "../../contexts/collection.context";
import { ModalContext } from "../../contexts/modal.context";
import "./modal-add-collection.styles.css";

const ModalCollection = ({ show, onClose }) => {
  const { addItemToCollection } = useContext(CollectionContext);
  const { setIsModalCollectionOpen } = useContext(ModalContext);
  const [collectionName, setCollectionName] = useState("");
  const [isError, setIsError] = useState()
  
  const addNewCollection = (e) => {
    addItemToCollection({ name: collectionName });
    console.log(isError);
    if(isError === undefined) {
      setCollectionName("");
      setIsModalCollectionOpen(false);
    }
   
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setCollectionName(value);
  };
  if (!show) {
    return null;
  } else {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h4 className="modal-title">Add New Collection</h4>
          <div className="modal-body">
            <input
              type="text"
              className="form-input"
              onChange={handleChange}
              value={collectionName}
              name="collectionName"
            />
            <div className="">
              {isError && <label htmlFor="">{isError.message}</label>}
            </div>
          </div>
          <div className="add-item-modal-footer">
            <button className="btn" onClick={addNewCollection}>
              ADD
            </button>
            <button
              className="btn-invert"
              onClick={() => setIsModalCollectionOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalCollection;
