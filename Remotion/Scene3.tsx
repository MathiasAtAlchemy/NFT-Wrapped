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
  padding-left: 50px;
  paddirhg-right: 50px;
`;

//TODO: Add top5 nfts prop to pass down to NFT TITLE and NFT IMAGE
export const Scene3 = ({ topNFT }) => {
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

  const UPSTART = 60;

  const upAnimation = spring({
    frame: frame - UPSTART,
    fps,
    config: {
      damping: 200,
    },
  });

  const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

  const textOpacity = (() => {
    if (frame < UPSTART) {
      return interpolate(progress, [0.9, 1], [0, 1]);
    }
    return interpolate(upAnimation, [0, 1], [1, 0]);
  })();

  const NftTitleOpacity = spring({
    frame: frame - UPSTART - 15,
    fps,
    config: {
      mass: 0.45,
    },
  });
  const NftCollectionOpacity = spring({
    frame: frame - UPSTART - 33,
    fps,
    config: {
      mass: 0.45,
    },
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0F172A",
      }}
    >
      <AbsoluteFill
        style={{ transform: `translateY(${contentTranslation}px)` }}
      >
        <Title style={{ opacity: textOpacity }}>Your most coveted NFT</Title>
        <Title
          style={{ top: 1030, fontSize: 30, opacity: NftCollectionOpacity }}
        >
          {topNFT.collectionName}
        </Title>

        <Title style={{ top: 1100, opacity: NftTitleOpacity }}>
          {topNFT.title}
        </Title>

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
          <Album image={topNFT.media} format={topNFT.format} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
//#374151

//#363FF9
