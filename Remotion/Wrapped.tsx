import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  padding: 80px 60px;
  display: flex;
  flex: 1;
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 80px;
  font-weight: bold;
  font-family: --apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
  line-height: 1;
`;

export const Wrapped: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const titleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });
  const scale = interpolate(progress, [0, 1], [0.7, 1]);
  return (
    <Container>
      <div style={{ flex: 1, position: "relative" }}>
        <AbsoluteFill
          style={{
            backgroundColor: "#4C1D95",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `scale(${scale})`,
            opacity: progress,
          }}
        >
          <Title style={{ opacity: titleProgress }}>
            NFT
            <br />
            Wrapped
          </Title>
        </AbsoluteFill>
      </div>
    </Container>
  );
};
