import styled from "styled-components";
import Card from "./Card";

import CONTENT_DATAS from "../../../data";
import Detail from "../detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import { detailAction } from "../../../store/detail-slice";
import Portal from "../../portal/Portal";

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  max-width: 1280px;
  width: 100%;
  gap: 40px;
  padding: 0 30px;
  @media screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

const Cards = () => {
  const dispatch = useDispatch();
  const { is, data } = useSelector((state) => state.detail);

  const handleClick = (id) => {
    dispatch(detailAction.setDetail({ is: true, id: id }));
  };

  return (
    <>
      {is && (
        <Portal>
          <Detail open={is} data={data} />
        </Portal>
      )}
      <StyledCards>
        {CONTENT_DATAS.map((content) => (
          <Card
            key={content.title}
            imgSrc={content.thumbnail}
            title={content.title}
            description={content.description}
            period={content.period}
            onClick={() => handleClick(content.id)}
          />
        ))}
      </StyledCards>
    </>
  );
};

export default Cards;
