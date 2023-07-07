import React from "react";
import { AbsoluteFill, useVideoConfig, staticFile, Sequence } from "remotion";
import { Gradient } from "./Gradient";
import { ScaleNft } from "./ScaleNft";
import { FourNft } from "./FourNft";
import { GradientCircle } from "./GradientCircle";
import { Wrapped } from "./Wrapped";
export const Scene1: React.FC<{
  media: string[];
  ranking: string[];
  NFTArrayObjects: object[];
}> = ({ media, ranking, NFTArrayObjects }) => {
  const { height } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Gradient height={height} />

      <Sequence durationInFrames={Infinity} from={0}>
        <FourNft image={media[0]} NFTArrayObjects={NFTArrayObjects[1]} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={30}>
        <FourNft image={media[1]} NFTArrayObjects={NFTArrayObjects[2]} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={60}>
        <FourNft image={media[2]} NFTArrayObjects={NFTArrayObjects[3]} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={90}>
        <FourNft image={media[3]} NFTArrayObjects={NFTArrayObjects[4]} />
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
