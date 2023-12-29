import React from "react";
import styled from "styled-components";

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
  padding: 10px;
  background-color: #1b1616;
  color: white;
`;

const Name = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-family: Inter;
`;

const Quote = styled.p`
  width: 315px;
  height: 8rem;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Happy Monkey;
  font-size: 17px;
  width: 90%;
`;

const EquipeCard = ({ image, name, quote }) => {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <ContentContainer>
        <Name>{name}</Name>

        <div style={{
          display: 'flex'
        }} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
        >
          <path
            d="M20.9014 1.50263C17.3083 3.84007 15.5117 6.65612 15.5117 9.95079C15.5117 10.9748 15.687 11.4868 16.0376 11.4868L16.3991 11.3866C16.6839 11.2753 16.9139 11.2197 17.0892 11.2197C18.097 11.2197 18.9515 11.5981 19.6526 12.355C20.3537 13.1119 20.7042 14.0469 20.7042 15.1599C20.7042 16.2285 20.3318 17.1412 19.5869 17.8981C18.8419 18.6327 17.9437 19 16.892 19C15.4241 19 14.2081 18.3878 13.2441 17.1634C12.302 15.9391 11.831 14.403 11.831 12.5554C11.831 10.4405 12.2363 8.51494 13.0469 6.77856C13.8795 5.01992 15.1174 3.4505 16.7606 2.0703C18.4257 0.6901 19.4883 0 19.9484 0C20.2551 0 20.507 0.155828 20.7042 0.467485C20.9014 0.756882 21 1.01289 21 1.2355L20.9014 1.50263ZM9.07042 1.50263C5.47731 3.84007 3.68075 6.65612 3.68075 9.95079C3.68075 10.9748 3.85603 11.4868 4.20657 11.4868L4.56808 11.3866C4.8529 11.2753 5.08294 11.2197 5.25822 11.2197C6.28795 11.2197 7.14241 11.5981 7.8216 12.355C8.52269 13.1119 8.87324 14.0469 8.87324 15.1599C8.87324 16.2285 8.50078 17.1412 7.75587 17.8981C7.01096 18.6327 6.11268 19 5.06103 19C3.59311 19 2.37715 18.3878 1.41315 17.1634C0.471048 15.9391 0 14.403 0 12.5554C0 10.4628 0.405321 8.54833 1.21596 6.81195C2.0266 5.07557 3.26448 3.50615 4.92958 2.10369C6.59468 0.70123 7.65728 0 8.11737 0C8.4241 0 8.67606 0.155828 8.87324 0.467485C9.07042 0.756882 9.16901 1.01289 9.16901 1.2355L9.07042 1.50263Z"
            fill="#383838"
          />
        </svg>
        <Quote>{quote}</Quote>

        </div>
   
      </ContentContainer>
    </CardContainer>
  );
};

export default EquipeCard;
