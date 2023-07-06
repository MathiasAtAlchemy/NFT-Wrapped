import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";
import { styled } from "styled-components";

const BAR_HEIGHT = 160;
const Title = styled.div`
  font-family: --apple-system, BlinkMacSystemFont, sans-serif;
  color: white;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: 150px;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding-left: 50px;
  paddirhg-right: 50px;
`;

const Bar = styled.div`
  height: ${BAR_HEIGHT}px;
  background-color: white;
  border-radius: ${BAR_HEIGHT / 2}px;
  margin-top: 10px;
  margin-left: -60px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 28px;
  font-family: --apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: bold;
  line-height: 1.4;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

//#D81B9A
//#C244F1
//#D87DFB
//#EF4444
//#4C1D95
//#5800F7

const TOTAL_RANKS = 5;

// Can make components of row/bar/div
export const Scene2 = () => {
  const { width, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame - (TOTAL_RANKS - 5) * 3 - 10,
    [0, 8],
    [0, 1]
  );

  const animatedWidthProgress = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });
  const animatedWidth = interpolate(
    animatedWidthProgress,
    [0, 1],
    [0, width + 100]
  );

  return (
    <AbsoluteFill
      style={{
        background: "#151751",
      }}
    >
      <Title>Your top NFTs</Title>
      <div style={{ height: 250 }} />
      <Row>
        <Bar
          style={{
            backgroundColor: "#78D3FF",
            width: interpolate(
              animatedWidthProgress,
              [0, 1],
              [0, width / 2 + 100]
            ),
            opacity: interpolate(
              frame - (TOTAL_RANKS - 1) * 3 - 10,
              [0, 8],
              [0, 1]
            ),
          }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #1 <br /> NFT1
        </div>
      </Row>
      <Row>
        <Bar
          style={{
            backgroundColor: "#73FCC2",
            width: interpolate(
              animatedWidthProgress,
              [0, 1],
              [0, width / 2 + 50]
            ),
            opacity: interpolate(
              frame - (TOTAL_RANKS - 2) * 3 - 10,
              [0, 8],
              [0, 1]
            ),
          }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #2 <br /> NFT2
        </div>
      </Row>
      <Row>
        <Bar
          style={{
            backgroundColor: "#363FF9",
            width: interpolate(animatedWidthProgress, [0, 1], [0, width / 2]),
            opacity: interpolate(
              frame - (TOTAL_RANKS - 3) * 3 - 10,
              [0, 8],
              [0, 1]
            ),
          }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #3 <br /> NFT3
        </div>
      </Row>
      <Row>
        <Bar
          style={{
            backgroundColor: "#020617",
            width: interpolate(
              animatedWidthProgress,
              [0, 1],
              [0, width / 2 - 50]
            ),
            opacity: interpolate(
              frame - (TOTAL_RANKS - 4) * 3 - 10,
              [0, 8],
              [0, 1]
            ),
          }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #4 <br /> NFT4
        </div>
      </Row>
      <Row>
        <Bar
          style={{
            backgroundColor: "#FFFFFF",
            width: interpolate(
              animatedWidthProgress,
              [0, 1],
              [0, width / 2 - 100]
            ),
            opacity: interpolate(
              frame - (TOTAL_RANKS - 5) * 3 - 10,
              [0, 8],
              [0, 1]
            ),
          }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #5 <br /> NFT5
        </div>
      </Row>
    </AbsoluteFill>
  );
};
