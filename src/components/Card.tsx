import React from "react";
import { Wrapper } from "./Card.styles";

export interface CardProps {
  code?: string;
  image?: string;
  value?: string;
  suit?: string;
}

const Card: React.FC<CardProps> = ({ code, image, value, suit }) => (
  <Wrapper>
    <div className="card-info">
      {value} {suit} ({code})
    </div>
    {image && (
      <div className="image">
        <img src={image} alt="{suit}" />
      </div>
    )}
  </Wrapper>
);

export default Card;
