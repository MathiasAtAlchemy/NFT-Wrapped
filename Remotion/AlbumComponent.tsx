import React from "react";
import styled from "styled-components";
import { Img, staticFile } from "remotion";

export const COVER_SIZE = 400;

const Cover = styled.div`
  width: ${COVER_SIZE}px;
  height: ${COVER_SIZE}px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
`;

export const Album = ({ image, format }) => {
  const isMP4 = format === "mp4";
  return (
    <Cover>
      {isMP4 ? (
        <video
          src={image}
          style={{ height: COVER_SIZE, width: COVER_SIZE }}
          autoPlay
          loop
        ></video>
      ) : (
        <Img src={image} style={{ height: COVER_SIZE, width: COVER_SIZE }} />
      )}
    </Cover>
  );
};
