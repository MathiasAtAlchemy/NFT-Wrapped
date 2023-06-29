import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import React from "react";
import styled from "styled-components";
import { Gradient } from "./Gradient";
import { Album } from "./AlbumComponent";
import { COVER_SIZE } from "./AlbumComponent";

const CIRCLE_SIZE = 500;

const Circle = styled.div`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;
  overflow: hidden;
  position: absolute;
`;

const Title = styled.div`
  font-family: --apple-system, BlinkMacSystemFont, sans-serif;
  color: white;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: 300px;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const Scene3 = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const scale = interpolate(progress, [0, 1], [4, 1]);

  const coverOpacity = interpolate(progress, [0.7, 1], [0, 1]);
  const coverScale = interpolate(progress, [0.6, 1], [0.7, 1]);

  const upAnimation = spring({
    frame: frame - 100,
    fps,
    config: {
      damping: 200,
    },
  });

  return (
    <AbsoluteFill
      style={{
        background: "#363FF9",
      }}
    >
      <Title>Your most coveted NFT</Title>
      <Circle
        style={{
          opacity: progress,
          left: width / 2 - CIRCLE_SIZE / 2,
          top: height / 2 - CIRCLE_SIZE / 2 + 100,
          transform: `scale(${scale})`,
        }}
      >
        <Gradient height={CIRCLE_SIZE} />
      </Circle>
      <div
        style={{
          left: width / 2 - COVER_SIZE / 2,
          top: height / 2 - COVER_SIZE / 2 + 100,
          position: "absolute",
          opacity: coverOpacity,
          transform: `scale(${coverScale})`,
        }}
      >
        <Album />
      </div>
    </AbsoluteFill>
  );
};
