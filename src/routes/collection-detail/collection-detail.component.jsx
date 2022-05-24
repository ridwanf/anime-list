import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import Btn from "../../components/Btn/button.component";
import InfoField from "../../components/info-field/info-field.component";
import Rate from "../../components/rate/rate.component";
import { CollectionContext } from "../../contexts/collection.context";
import "./collection-detail.styles.jsx";
import { CollectionDetailContainer, CollectionDetailWrapper, CollectionDetailImage } from "./collection-detail.styles.jsx";
const CollectionDetail = () => {
  const { name } = useParams();

  const { getCollectionDetail, collectionDetail, removeAnimeFromCollection } =
    useContext(CollectionContext);

  const deleteItem = (collectionDetail, itemToRemove) => {
    removeAnimeFromCollection(collectionDetail, itemToRemove)
  }
  useEffect(() => {
    getCollectionDetail({ name: name });
  });

  return (
    <CollectionDetailContainer>
      <Banner
        urlImage={
          collectionDetail.animeList && collectionDetail.animeList[0]
            ? collectionDetail.animeList[0].bannerImage
            : "https://anilist.co/img/icons/android-chrome-512x512.png"
        }
      />
      {collectionDetail.animeList &&
        collectionDetail.animeList.map((detail) => (
          <CollectionDetailWrapper key={detail.id}>
            <CollectionDetailImage>
              <img src={detail.coverImage.large} alt="detail-img" />
            </CollectionDetailImage>
            <CollectionDetail>
              <span>{detail.title.romaji}</span>
            </CollectionDetail>
            <CollectionDetail>
              <Rate score={detail.averageScore} />
            </CollectionDetail>

            <InfoField label="Episode" value={detail.episodes}  className="collection-detail"/>
            <InfoField label="Genres" value={detail.genres.join(", ")} className="collection-detail"/>
            <div className="collection-detail">
              <Btn onClick={ () => deleteItem(collectionDetail, detail)}>Delete</Btn>
            </div>
          </CollectionDetailWrapper>
        ))}
    </CollectionDetailContainer>
  );
};

export default CollectionDetail;
