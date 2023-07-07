import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ScaleNft } from "./ScaleNft";

export const FourNft: React.FC<{
  image: string;
  NFTArrayObjects: object;
}> = ({ image, NFTArrayObjects }) => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const progress = spring({ frame, fps, config: { damping: 1000, mass: 2.5 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const offsetX = Math.max(0, interpolate(progress, [0, 1], [width / 3, -50]));
  const offsetY = Math.max(0, interpolate(progress, [0, 1], [height / 3, -50]));
  const clipPath = `inset(${offsetX}px ${offsetY}px ${offsetX}px ${offsetY}px)`;

  return (
    <AbsoluteFill style={{ clipPath, opacity }}>
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          transform: `scaleX(-1)`,
        }}
      >
        <ScaleNft image={image} NFTArrayObjects={NFTArrayObjects} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{ width: width / 2, height: height / 2, left: width / 2 }}
      >
        <ScaleNft image={image} NFTArrayObjects={NFTArrayObjects} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          top: height / 2,
          transform: "scale(-1)",
        }}
      >
        <ScaleNft image={image} NFTArrayObjects={NFTArrayObjects} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          width: width / 2,
          height: height / 2,
          left: width / 2,
          top: height / 2,
          transform: "scaleY(-1)",
        }}
      >
        <ScaleNft image={image} NFTArrayObjects={NFTArrayObjects} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
