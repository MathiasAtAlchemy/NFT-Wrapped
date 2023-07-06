import React from "react";
import { AbsoluteFill, useVideoConfig, staticFile, Sequence } from "remotion";
import { Gradient } from "./Gradient";
import { ScaleNft } from "./ScaleNft";
import { FourNft } from "./FourNft";
import { GradientCircle } from "./GradientCircle";
import { Wrapped } from "./Wrapped";
export const Scene1: React.FC<{ media: string[]; ranking: string[] }> = ({
  media,
  ranking,
}) => {
  const { height } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Gradient height={height} />

      <Sequence durationInFrames={Infinity} from={0}>
        <FourNft image={media[0]} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={30}>
        <FourNft image={media[1]} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={60}>
        <FourNft image={media[2]} />
      </Sequence>
      <Sequence durationInFrames={Infinity} from={90}>
        <FourNft image={media[3]} />
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
