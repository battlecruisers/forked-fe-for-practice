import { Wrapper } from "../styles/accommodationRoomList";
import AccommodationRoomItem from "./AccommodationRoomItem";
import { useParams, useNavigate } from "react-router-dom";
import * as style from "../styles/accommodationRoomItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAccommodationInfoQuery } from "../hooks/queries/fetchData";

const AccommodationRoomList = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  //날짜, 게스트 임의 지정
  const startDate = "2023-11-21";
  const endDate = "2023-12-05";
  const guest = 2;

  const { status, data } = useAccommodationInfoQuery({ id, startDate, endDate, guest });

  if (status === "pending") {
    return (
      <Wrapper style={{ zIndex: 0 }}>
        {[...Array(4)].map((_, index) => (
          <style.Box key={index}>
            <style.RoomImgWrapper>
              <Skeleton width={300} height={150} />
            </style.RoomImgWrapper>
            <style.SkeletonRoomInfo>
              <style.SkeletonRoomTopWrapper>
                <Skeleton height={30} width={180} />
                <Skeleton width={240} height={20} />
              </style.SkeletonRoomTopWrapper>
              <Skeleton height={25} width={170} />
              <Skeleton height={15} width={100} />
            </style.SkeletonRoomInfo>
          </style.Box>
        ))}
      </Wrapper>
    );
  } else if (status === "error") {
    window.alert("잘못된 접근입니다. 메인 페이지로 이동합니다.");
    navigation("/");
    return null;
  }

  return (
    <Wrapper>
      {data.data.roomOptions.map(room => (
        <AccommodationRoomItem
          key={room.id}
          id={room.id}
          accommodationId={id}
          name={room.name}
          img={room.roomOptionImage.mainImageUrls[0]}
          checkIn={room.checkInTime}
          checkOut={room.checkOutTime}
          price={room.totalPrice}
          stayDuration={room.stayDuration}
          totalRoomCount={room.totalRoomCount}
          reservedRoomCount={room.reservedRoomCount}
        />
      ))}
    </Wrapper>
  );
};

export default AccommodationRoomList;
