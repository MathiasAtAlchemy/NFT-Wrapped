import React from "react";
import { AbsoluteFill, useVideoConfig, useCurrentFrame } from "remotion";

export const Gradient = ({ height }) => {
  const frame = useCurrentFrame();
  const duration = 4 * 30;
  const offset = (height * 1.5 * (frame % duration)) / duration;
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          transform: `translateY(-${offset}px)`,
          height: height * 1.5,
          background:
            "linear-gradient(to bottom,#7FABEF, #B25FF3, #0055FF, #21D6EF, #7FABEF)",
        }}
      ></AbsoluteFill>

      <AbsoluteFill
        style={{
          transform: `translateY(-${offset}px)`,
          height: height * 1.5,
          top: height * 1.5 - 1,
          background:
            "linear-gradient(to bottom,#7FABEF, #B25FF3, #0055FF, #21D6EF, #7FABEF)",
        }}
      ></AbsoluteFill>
    </AbsoluteFill>
  );
};

// #7FABEF, #B25FF3, #0055FF, #21D6EF, #FFBB36, #F13F3F, #FF37DC, #733FF1, #7FABEF
// #36BEFF, #733FF1, #A7CAFF, #B25FF3, #FF37DC, #733FF1, #FC9EB4, #FFC5A4, #72FCC2, #50D5FF, #FFD27C, #FFAA8F, #0A8AC8, #95E7F9, #7694FF, #5216E8
//#7FABEF, #B25FF3, #0055FF, #21D6EF, #7FABEF, #B25FF3, #FF7C7C, #FFAA8F, #FFBB36, #F13F3F, #FF37DC, #733FF1, #FF37DC, #F30404
//#7FABEF, #B25FF3, #0055FF, #21D6EF, #FFBB36, #F13F3F, #FF37DC, #F30404

//#7FABEF, #B25FF3, #0055FF, #21D6EF,#7FABEF, #B25FF3, #7FABEF
