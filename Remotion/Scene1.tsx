import React from "react";
import { AbsoluteFill, useVideoConfig, staticFile, Sequence } from "remotion";
import { Gradient } from "./Gradient";
import { ScaleNft } from "./ScaleNft";
import { FourNft } from "./FourNft";
import { GradientCircle } from "./GradientCircle";
import { Wrapped } from "./Wrapped";
export const Scene1: React.FC = () => {
  const { height } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Gradient height={height} />

      <FourNft image={staticFile("NFTImage.jpg")} />
      <Sequence durationInFrames={Infinity} from={30}>
        <FourNft image={staticFile("NFTImage3.jpg")} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={60}>
        <FourNft image={staticFile("NFTImage2.jpg")} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={90}>
        <FourNft image={staticFile("NFTImage.jpg")} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={120}>
        <GradientCircle />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={150}>
        <Wrapped />
      </Sequence>
    </AbsoluteFill>
  );
};
