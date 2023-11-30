import { useState } from "react";
import { PaymentData } from "../reservationList.types";
import * as cartStyle from "../../cart/styles/cartRoom";
import * as reserStyle from "../../reservation/styles/reservationRooms";
import * as style from "../styles/payedRooms";
import ReservationCancelModal from "./ReservationCancelModal";

const PayedRooms = ({ paymentData }: { paymentData: PaymentData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isCanceled = paymentData.paymentCanceled;

  return (
    <style.PayedRoomsList $isPaymentId={isCanceled}>
      <style.RoomOptionsCancel $isPaymentId={paymentData.paymentCanceled}>
        <style.ReservationNumber>숙소 예약 번호: {paymentData.reservationNumber}</style.ReservationNumber>
        {paymentData.paymentCanceled ? (
          "예약이 취소된 상품입니다."
        ) : (
          <style.CancelBtn onClick={() => setIsModalOpen(true)}>예약 취소</style.CancelBtn>
        )}
      </style.RoomOptionsCancel>
      {paymentData.accommodations.map(accommodation => (
        <div key={`accommodation-list-${accommodation.accommodationId}`}>
          <cartStyle.Accommodation href={"/accommodation/" + accommodation.accommodationId} $isPaymentId={isCanceled}>
            <cartStyle.AccommodationName>{accommodation.name}</cartStyle.AccommodationName>
            <cartStyle.AccommodationAddress>{accommodation.address}</cartStyle.AccommodationAddress>
          </cartStyle.Accommodation>

          {accommodation.roomOptions.map(roomOption => (
            <div key={`room-option-${roomOption.paymentProductId}`}>
              <reserStyle.RoomOptions>
                <reserStyle.RoomOptionImg src={roomOption.thumbnailImage} alt="숙소 사진" $isPaymentId={isCanceled} />

                <reserStyle.RoomOptionsText>
                  <reserStyle.RoomOptionsName>{roomOption.name}</reserStyle.RoomOptionsName>
                  <span>
                    {roomOption.reservationStartDate} ~ {roomOption.reservationEndDate} | {roomOption.stayDuration} 박
                  </span>
                  <reserStyle.RoomOptionsCapacity>{roomOption.numberOfGuest} 인</reserStyle.RoomOptionsCapacity>
                </reserStyle.RoomOptionsText>

                <reserStyle.RoomOptionsPrice>{roomOption.totalPrice.toLocaleString()} 원</reserStyle.RoomOptionsPrice>
              </reserStyle.RoomOptions>

              <style.RoomOptionsTrans>
                <span>방문 수단</span>
                <span>{roomOption.transportation === "CAR" ? "차량" : "도보"}</span>
              </style.RoomOptionsTrans>
            </div>
          ))}

          {isModalOpen ? (
            <ReservationCancelModal
              reservationNumber={paymentData.reservationNumber}
              paymentId={paymentData.paymentId}
              setIsModalOpen={setIsModalOpen}
            />
          ) : null}
        </div>
      ))}
    </style.PayedRoomsList>
  );
};

export default PayedRooms;
