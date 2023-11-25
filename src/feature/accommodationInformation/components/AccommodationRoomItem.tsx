import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toastState } from "../../../recoil/toast";
import * as style from "../styles/accommodationRoomItem";

/**실제 데이터 받아올 때 타입 지정해줘야 함 */
const AccommodationRoomItem = ({
  id,
  name,
  img,
  checkIn,
  checkOut,
  price,
  accommodationId,
  stayDuration,
  totalRoomCount,
  reservedRoomCount,
}) => {
  const setToast = useSetRecoilState(toastState);
  const availableRoomCount = totalRoomCount - reservedRoomCount;

  return (
    <style.Box>
      <style.RoomImgWrapper>
        <style.RoomImg src={img} />
      </style.RoomImgWrapper>
      <style.RoomInfo>
        <style.RoomTopWrapper>
          <style.RoomName>{name.length >= 16 ? name.slice(0, 15) + "..." : name}</style.RoomName>
          <Link to={`/accommodation/${accommodationId}/room/${id}`}>
            <style.RoomDetailButton>상세보기 {">"}</style.RoomDetailButton>
          </Link>
        </style.RoomTopWrapper>
        <style.RoomCheckInOut>
          <style.RoomCheckIn>
            <span>체크인: </span>
            {checkIn.slice(0, 5)}
          </style.RoomCheckIn>
          <span>~</span>
          <style.RoomCheckOut>
            <span>체크아웃: </span>
            {checkOut.slice(0, 5)}
          </style.RoomCheckOut>
        </style.RoomCheckInOut>
        <style.RoomPrice>
          {price.toLocaleString()}원 / {stayDuration}박
        </style.RoomPrice>
        {availableRoomCount > 0 && <style.RoomCount>남은 객실 수: {availableRoomCount}개</style.RoomCount>}
        <style.ButtonWraper>
          <style.CartButton onClick={() => setToast({ open: true, message: "장바구니에 상품이 담겼습니다." })}>
            <style.CartIcon />
          </style.CartButton>
          <Link to="/reservation">
            <style.ReservationButton>예약하기</style.ReservationButton>
          </Link>
        </style.ButtonWraper>
      </style.RoomInfo>
    </style.Box>
  );
};

export default AccommodationRoomItem;
