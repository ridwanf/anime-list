import { useContext, useEffect, useState } from "react";

import { CollectionContext } from "../../contexts/collection.context";
import Modal from "../../components/modal/modal.component";
import { DEFAULT_COVER } from "../../uilts/const.util";
import Banner from "../../components/banner/banner.component";
import {
  AddCollectionContainer,
  CollectionContainer,
  CollectionItem,
  CollectionItemLeft,
  ModalBody,
  ModalFooter,
} from "./collection-list.styles";
import List from "../../components/list/list.component";
import Btn from "../../components/Btn/button.component";
import ModalCollection from "../../components/modal-add-collection/modal-add-collection.component";
import { ModalContext } from "../../contexts/modal.context";
import { useNavigate } from "react-router-dom";

const CollectionList = () => {
  const navigate = useNavigate();

  const {
    collections,
    removeCollectionFromList,
    updateCollectionName,
    isError,
    setIsError,
  } = useContext(CollectionContext);
  const { setIsModalCollectionOpen, isModalCollectionOpen } =
    useContext(ModalContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [newName, setNewName] = useState("");


  useEffect(() => {
    if(!modalConfirmationOpen || !modalOpen) {
      setIsError({})
    }
  },[modalOpen, modalConfirmationOpen, setIsError])

  const deleteAction = (col) => {
    setModalConfirmationOpen(true);
    setCollectionName(col.name);
  };
  const confirmDelete = (collectionName) => {
    removeCollectionFromList(collectionName);
    setModalConfirmationOpen(false);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setNewName(value);
  };

  const btnEditClick = (item) => {
    setModalOpen(true);
    setCollectionName(item.name);
    setNewName(item.name);
  };

  const submitCollectionName = () => {
    if (newName === "") {
      setIsError({
        error: "STRING_EMPTY",
        message: "Name Cannot Be Blank",
      });
      return;
    }
    updateCollectionName(collectionName, newName);
    if (isError === undefined) {
      setNewName("");
      setModalOpen(false);
    }
  };

  const goToCollectionDetail = (colName) => {
    navigate(`${colName}`);
  };

  const urlBanner =
    collections &&
    collections.length > 0 &&
    collections[0].animeList &&
    collections[0].animeList[0]
      ? collections[0].animeList[0].bannerImage
      : "assets/Default-Banner.png";

  return (
    <CollectionContainer>
      <Banner urlImage={urlBanner} />
      <AddCollectionContainer>
        <Btn
          buttonType={"inverted"}
          onClick={() => setIsModalCollectionOpen(true)}
        >
          Add New Collection
        </Btn>
      </AddCollectionContainer>
      {collections &&
        collections.map((collection) => {
          const name = collection.name;
          const title = collection.name;
          const coverImage =
            collection.animeList &&
            collection.animeList.length > 0 &&
            collection.animeList[0]
              ? collection.animeList[0].coverImage.large
              : DEFAULT_COVER;

          return (
            <List key={name}>
              <CollectionItem onClick={() => goToCollectionDetail(name)}>
                <img src={coverImage} alt="detail-img"/>
              </CollectionItem>
              <CollectionItem>
                <span>{title}</span>
              </CollectionItem>
              <CollectionItemLeft>
                <Btn onClick={() => btnEditClick(collection)}>Edit</Btn>
                <Btn onClick={() => deleteAction(collection)}>Delete</Btn>
              </CollectionItemLeft>
            </List>
          );
        })}
      <Modal onClose={() => setModalOpen(false)} show={modalOpen}>
        <h4 className="modal-title">Edit Collection</h4>
        <ModalBody>
          <input
            type="text"
            className="form-input"
            onChange={handleChange}
            value={newName}
            name="collectionName"
          />
        </ModalBody>
        <div className="">
          {isError && <label htmlFor="">{isError.message}</label>}
        </div>
        <ModalFooter>
          <Btn onClick={submitCollectionName}>Confirm</Btn>
          <Btn buttonType={"inverted"} onClick={() => setModalOpen(false)}>
            Cancel
          </Btn>
        </ModalFooter>
      </Modal>

      <Modal
        onClose={() => setModalConfirmationOpen(false)}
        show={modalConfirmationOpen}
      >
        <h4 className="modal-title">Remove Collection</h4>
        <ModalBody>
          <span>Are You Sure Want to Delete item: {collectionName}</span>
        </ModalBody>
        <ModalFooter>
          <Btn onClick={() => confirmDelete(collectionName)}>Confirm</Btn>
          <Btn
            buttonType={"inverted"}
            onClick={() => setModalConfirmationOpen(false)}
          >
            Cancel
          </Btn>
        </ModalFooter>
      </Modal>

      <ModalCollection
        show={isModalCollectionOpen}
        onClose={() => setIsModalCollectionOpen(false)}
      />
    </CollectionContainer>
  );
};

export default CollectionList;
