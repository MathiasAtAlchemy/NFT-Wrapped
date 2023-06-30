import React from "react";
import { Sequence } from "remotion";
import { Scene2 } from "./Scene2";
import { Scene3 } from "./Scene3";
import { Scene2Test } from "./Scene2Test";

export const Main = ({ ranking }) => {
  return (
    <>
      {/* V1 */}
      <Sequence from={0} durationInFrames={150}>
        <Scene2></Scene2>
      </Sequence>
      <Sequence from={150} durationInFrames={150}>
        <Scene3></Scene3>
      </Sequence>

      {/* V2 */}
      <Sequence from={300} durationInFrames={210}>
        <Scene2Test ranking={ranking}></Scene2Test>
      </Sequence>
      <Sequence from={510} durationInFrames={150}>
        <Scene3></Scene3>
      </Sequence>
    </>
  );
};
