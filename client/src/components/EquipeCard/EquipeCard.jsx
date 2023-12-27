import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 315px;
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 16px;
  background-color: #1B1616;
  color: white;
`;

const Name = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
`;

const Quote = styled.p`
  width: 315px;
  height: 274.5px;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EquipeCard = ({ image, name, quote }) => {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <ContentContainer>
        <Name>{name}</Name>
        <Quote>{quote}</Quote>
      </ContentContainer>
    </CardContainer>
  );
}

export default EquipeCard;
