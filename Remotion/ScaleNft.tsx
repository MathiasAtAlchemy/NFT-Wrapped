import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const ScaleNft: React.FC<{ image: string; NFTArrayObjects: object }> = ({
  image,
  NFTArrayObjects,
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(progress, [0, 1], [1, 1.2]);
  const translateX = interpolate(progress, [0, 1], [0, 30]);
  const isMP4 = NFTArrayObjects?.format === "mp4";
  const isENS =
    NFTArrayObjects?.collectionName === "ENS: Ethereum Name Service";

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
      }}
    >
      {isMP4 ? (
        <video
          src={image}
          autoPlay
          loop
          style={{
            position: "absolute",
            width: "auto",
            left: "-25%",
            height: "100%",
            transform: `scale(${scale}) translateX(${translateX}px)`,
          }}
        />
      ) : isENS ? (
        <Img
          src={image}
          style={{
            position: "absolute",
            height: "100%",
            left: "-15%",
            transform: `scale(${scale}) translateX(${translateX}px)`,
          }}
        ></Img>
      ) : (
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
      )}
    </AbsoluteFill>
  );
};
