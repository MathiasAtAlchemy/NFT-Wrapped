import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { Bar } from "./bar";

const TITLE_OFFSET = 150;
const FONT_SIZE = 50;
const Title = styled.div`
  font-family: ---apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-size: ${FONT_SIZE}px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: ${TITLE_OFFSET}px;
  width: 100%;
  line-height: 1;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  padding-left: 50px;
  padding-right: 50px;
`;

export const Scene2Test: React.FC<{
  ranking: [string, string, string, string, string];
  price: [string, string, string, string, string];
}> = ({ ranking, price }) => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const moveUp = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  const translateY = interpolate(
    moveUp,
    [0, 1],
    [height / 2 - TITLE_OFFSET - FONT_SIZE, 0]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#151751" }}>
      <AbsoluteFill
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        <Title>Your Top 5 NFTs</Title>
        <div style={{ height: 290 }} />
        <Bar
          color="linear-gradient(#36BEFF,#733FF1)"
          endWidth={width / 2}
          rank={1}
          title={ranking[0]}
          price={price[0]}
        />
        <Bar
          color="linear-gradient(#A7CAFF,#B25FF3)"
          endWidth={width / 2 - 40}
          rank={2}
          title={ranking[1]}
          price={price[1]}
        />
        <Bar
          color="linear-gradient(#FC9EB4,#FFC5A4)"
          endWidth={width / 2 - 80}
          rank={3}
          title={ranking[2]}
          price={price[2]}
        />
        <Bar
          color="linear-gradient(#73FCC2,#50D5FF)"
          endWidth={width / 2 - 120}
          rank={4}
          title={ranking[3]}
          price={price[3]}
        />
        <Bar
          color="linear-gradient(#FFD27C,#FFAA8F)"
          endWidth={width / 2 - 160}
          rank={5}
          title={ranking[4]}
          price={price[4]}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
