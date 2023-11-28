import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 100;

  height: 60px;
  width: 100%;
  max-width: 750px;
  padding: 5px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.1);

  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  * {
    transition: 0.4s;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LinkedBox = styled(Link)`
  display: flex;
  gap: 1px;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.color.darkGray};

  &:hover {
    color: ${({ theme }) => theme.color.mainPink};
  }
`;

const IconLabel = styled.p`
  display: flex;

  font-size: 12px;
`;

const CenterIcon = styled.div`
  width: 45px;
  height: 45px;

  border-radius: 50%;

  background-image: url("favicon.ico");
  background-size: cover;
`;

export { Container, LinkedBox, IconLabel, CenterIcon };
