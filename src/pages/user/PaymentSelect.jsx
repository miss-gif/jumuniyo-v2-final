/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PaymentSelect = ({ onPaymentSelect }) => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelect = (event, method) => {
    event.preventDefault();
    setSelectedPayment(method);
    onPaymentSelect(method); // 상위 컴포넌트에 선택된 결제수단 전달
  };

  return (
    <div className="payment-page__input-wrap">
      <h3 className="payment-page__subtitle">결제수단 선택</h3>
      <div className="payment-page__payment-method">
        <div className="payment-wrap">
          <h4>
            주문이요<span>웹에서 미리 결제</span>
          </h4>
          <div className="payment-page__mobile-payment">
            <button
              className={`payment-page__button ${selectedPayment === "카카오페이" ? "btn--active" : "btn--default"}`}
              onClick={event => handlePaymentSelect(event, "카카오페이")}
            >
              카카오페이
            </button>
          </div>
        </div>
        <div className="payment-wrap">
          <h4>현장결제</h4>
          <div className="payment-page__onsite-payment">
            <button
              className={`payment-page__button ${selectedPayment === "신용카드" ? "btn--active" : "btn--default"}`}
              onClick={event => handlePaymentSelect(event, "신용카드")}
            >
              신용카드
            </button>
            <button
              className={`payment-page__button ${selectedPayment === "현금" ? "btn--active" : "btn--default"}`}
              onClick={event => handlePaymentSelect(event, "현금")}
            >
              현금
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSelect;
