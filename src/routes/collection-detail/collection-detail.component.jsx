import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import InfoField from "../../components/info-field/info-field.component";
import Rate from "../../components/rate/rate.component";
import { CollectionContext } from "../../contexts/collection.context";
import "./collection-detail.styles.css";
const CollectionDetail = () => {
  const { name } = useParams();
  console.log(name);

  const { getCollectionDetail, collectionDetail } =
    useContext(CollectionContext);
  useEffect(() => {
    getCollectionDetail({ name: name });
  });
  console.log(collectionDetail);

  return (
    <div className="collection-detail-container">
      <Banner
        urlImage={
          collectionDetail.animeList && collectionDetail.animeList[0]
            ? collectionDetail.animeList[0].bannerImage
            : "https://anilist.co/img/icons/android-chrome-512x512.png"
        }
      />
      {collectionDetail.animeList &&
        collectionDetail.animeList.map((detail) => (
          <div className="collection-detail-wrapper">
            <div className="collection-detail-image">
              <img src={detail.coverImage.large} alt="detail-img" />
            </div>
            <div className="collection-detail-description collection-detail">
              <span>{detail.title.romaji}</span>
            </div>
            <div className="collection-detail">
              <Rate score={detail.averageScore} />
            </div>

            <InfoField label="Episode" value={detail.episodes}  className="collection-detail"/>
            <InfoField label="Genres" value={detail.genres.join(", ")} className="collection-detail"/>
            <div className="collection-detail">
              <button className="">X</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CollectionDetail;
