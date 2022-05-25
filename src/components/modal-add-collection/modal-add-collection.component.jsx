import React, { useContext, useEffect, useState } from "react";
import { CollectionContext } from "../../contexts/collection.context";
import { ModalContext } from "../../contexts/modal.context";
import Btn from "../Btn/button.component";
import Modal from "../modal/modal.component";
import "./modal-add-collection.styles.jsx";
import { FormInput, ModalFooter, ModalTitle } from "./modal-add-collection.styles.jsx";

const ModalCollection = ({ show, onClose }) => {
  const { addItemToCollection, isError, setIsError } = useContext(CollectionContext);
  const { setIsModalCollectionOpen } = useContext(ModalContext);
  const [collectionName, setCollectionName] = useState("");

  const addNewCollection = (e) => {
    if(collectionName === '') {
      setIsError({
        error: 'STRING_EMPTY',
        message: 'Name Cannot Be Blank'
      })
      return
    }
    addItemToCollection(collectionName);
    if (isError.error === undefined) {
      setCollectionName("");
      setIsModalCollectionOpen(false);
    }
  };

  useEffect(() => {
    if(!show) {
      setIsError({})
      setCollectionName("");
    }
  }, [show, setIsError])

  
  const handleChange = (event) => {
    const { value } = event.target;
    setCollectionName(value);
  };
  return (
    <Modal onClose={onClose} show={show}>
      <ModalTitle>Add New Collection</ModalTitle>
      <div className="modal-body">
        <FormInput
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
      <ModalFooter>
        <Btn onClick={addNewCollection}>
          ADD
        </Btn>
        <Btn buttonType={'inverted'}
          onClick={() => setIsModalCollectionOpen(false)}
        >
          Cancel
        </Btn>
      </ModalFooter>
    </Modal>
  );
};

export default ModalCollection;
