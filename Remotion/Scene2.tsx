import { AbsoluteFill, useVideoConfig } from "remotion";
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

// Can make components of row/bar/div
export const Scene2 = () => {
  const { width } = useVideoConfig();
  return (
    <AbsoluteFill
      style={{
        background: "#EF4444",
      }}
    >
      <Title>Your top NFTs</Title>
      <div style={{ height: 250 }} />
      <Row>
        <Bar
          style={{ backgroundColor: "#78D3FF", width: `${width / 2 + 100}px` }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #Rank <br /> NFT1
        </div>
      </Row>
      <Row>
        <Bar
          style={{ backgroundColor: "#73FCC2", width: `${width / 2 + 40}px` }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #Rank <br /> NFT1
        </div>
      </Row>
      <Row>
        <Bar
          style={{ backgroundColor: "#363FF9", width: `${width / 2 - 20}px` }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #Rank <br /> NFT1
        </div>
      </Row>
      <Row>
        <Bar
          style={{ backgroundColor: "#020617", width: `${width / 2 - 80}px` }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #Rank <br /> NFT1
        </div>
      </Row>
      <Row>
        <Bar
          style={{
            backgroundColor: "#FFFFFF",
            width: `${width / 2 - 140}px`,
          }}
        />
        <div style={{ width: 40, marginLeft: "20px" }}>
          #Rank <br /> NFT1
        </div>
      </Row>
    </AbsoluteFill>
  );
};

/*

      <Bar style={{ color: "#73FCC2" }} />
      <Bar style={{ color: "#363FF9" }} />
      <Bar style={{ color: "#020617" }} />
      <Bar style={{ color: "#FFFFFF" }} />

*/

//linear-gradient(to bottom, #4C1D95, #1F2937)
