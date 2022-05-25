import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import Btn from "../../components/Btn/button.component";
import InfoField from "../../components/info-field/info-field.component";
import Modal from "../../components/modal/modal.component";
import Rate from "../../components/rate/rate.component";
import { CollectionContext } from "../../contexts/collection.context";
import {
  ModalBody,
  ModalFooter,
} from "../collection-list/collection-list.styles";
import "./collection-detail.styles.jsx";
import {
  CollectionDetailDiv,
  CollectionDetailContainer,
  CollectionDetailWrapper,
  CollectionDetailImage,
} from "./collection-detail.styles.jsx";
const CollectionDetail = () => {
  const { name } = useParams();

  const [modalConfirmationOpen, setModalConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});
  const { getCollectionDetail, collectionDetail, removeAnimeFromCollection } =
    useContext(CollectionContext);

  const deleteItem = () => {
    removeAnimeFromCollection(collectionDetail, itemToDelete);
    setModalConfirmationOpen(false);
  };

  const deleteAction = (itemToRemove) => {
    setModalConfirmationOpen(true);
    setItemToDelete(itemToRemove);
  };
  useEffect(() => {
    getCollectionDetail(name);
  });

  return (
    <CollectionDetailContainer>
      <Banner
        urlImage={
          collectionDetail.animeList &&
          collectionDetail.animeList.length > 0 &&
          collectionDetail.animeList[0] &&
          collectionDetail.animeList[0].bannerImage
            ? collectionDetail.animeList[0].bannerImage
            : "https://anilist.co/img/icons/android-chrome-512x512.png"
        }
      />
      {collectionDetail.animeList &&
        collectionDetail.animeList.length > 0 &&
        collectionDetail.animeList.map((detail) => (
          <CollectionDetailWrapper key={detail.id}>
            <CollectionDetailImage>
              <img src={detail.coverImage.large} alt="detail-img"  />
            </CollectionDetailImage>
            <CollectionDetailDiv>{detail.title.romaji}</CollectionDetailDiv>
            <Rate score={detail.averageScore} />

            <InfoField
              label="Episode"
              value={detail.episodes}
              className="collection-detail"
            />
            <InfoField
              label="Genres"
              value={detail.genres.join(", ")}
              className="collection-detail"
            />
            <div className="collection-detail">
              <Btn onClick={() => deleteAction(detail)}>Delete</Btn>
            </div>
          </CollectionDetailWrapper>
        ))}

      <Modal
        onClose={() => setModalConfirmationOpen(false)}
        show={modalConfirmationOpen}
      >
        <h4 className="modal-title">Remove Collection</h4>
        <ModalBody>
          <span>
            Are You Sure Want to Delete item:{" "}
            {itemToDelete && itemToDelete.title
              ? itemToDelete.title.romaji
              : ""}
          </span>
        </ModalBody>
        <ModalFooter>
          <Btn onClick={deleteItem}>Confirm</Btn>
          <Btn
            buttonType={"inverted"}
            onClick={() => setModalConfirmationOpen(false)}
          >
            Cancel
          </Btn>
        </ModalFooter>
      </Modal>
    </CollectionDetailContainer>
  );
};

export default CollectionDetail;
