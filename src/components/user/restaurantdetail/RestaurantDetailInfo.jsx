/* eslint-disable react/prop-types */
import React from "react";

const RestaurantDetailInfo = ({ restaurantData }) => {
  // 소수 둘째 자리에서 반올림된 reviewScore
  const roundedReviewScore = Math.round(restaurantData.reviewScore * 100) / 100;

  // reviewScore에 맞춰 별을 생성하는 함수
  const renderStars = score => {
    const fullStars = Math.floor(score);
    const halfStar = score % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill("★")
          .map((star, index) => (
            <span key={`full-${index}`} className="star full">
              {star}
            </span>
          ))}
        {halfStar && <span className="star half">★</span>}
        {Array(emptyStars)
          .fill("☆")
          .map((star, index) => (
            <span key={`empty-${index}`} className="star empty">
              {star}
            </span>
          ))}
      </>
    );
  };

  return (
    <div className="restaurant-detail-page__info">
      <h2 className="restaurant-detail-page__info-name">
        {restaurantData.restaurantName}
      </h2>
      <div className="restaurant-detail-page__info-content">
        <div className="restaurant-detail-page__info-image">
          <img
            src={
              restaurantData.restaurantPic
                ? `/pic${restaurantData.restaurantPic}`
                : "/images/defaultRes.png"
            }
            alt={restaurantData.restaurantPic}
          />
        </div>
        <div className="restaurant-detail-page__info-details">
          <div className="restaurant-detail-page__info-rating">
            <span>{renderStars(roundedReviewScore)}</span>
            <p>{roundedReviewScore}</p>
          </div>
          <p className="restaurant-detail-page__info-payment">
            <span className="gray">결제</span> 신용카드, 현금, 웹 결제
          </p>
        </div>
      </div>
      <p className="restaurant-detail-page__info-notice">
        <span>가게 소개: </span> {restaurantData.restaurantDesc}
      </p>
    </div>
  );
};

export default RestaurantDetailInfo;
