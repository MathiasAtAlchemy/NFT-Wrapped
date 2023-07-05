import React from "react";
import { Sequence } from "remotion";
import { Scene2 } from "./Scene2";
import { Scene3 } from "./Scene3";
import { Scene2Test } from "./Scene2Test";
import { Scene1 } from "./Scene1";

export const Main = ({ ranking, price }) => {
  return (
    <>
      <Sequence from={0} durationInFrames={210}>
        <Scene1></Scene1>
      </Sequence>
      <Sequence from={210} durationInFrames={210}>
        <Scene2Test ranking={ranking} price={price}></Scene2Test>
      </Sequence>
      <Sequence from={420} durationInFrames={150}>
        <Scene3></Scene3>
      </Sequence>
    </>
  );
};
