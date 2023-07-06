import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const ScaleNft: React.FC<{ image: string }> = ({ image }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(progress, [0, 1], [1, 1.2]);
  const translateX = interpolate(progress, [0, 1], [0, 30]);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
      }}
    >
      <Img
        src={image}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          // left: "-50%",
          transform: `scale(${scale}) translateX(${translateX}px)`,
        }}
      ></Img>
    </AbsoluteFill>
  );
};
