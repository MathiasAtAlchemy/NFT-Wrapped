import { Composition } from "remotion";
import { Gradient } from "./Gradient";
import { Scene3 } from "./Scene3";
import React from "react";
import { Scene2 } from "./Scene2";

export const MyVideo = () => {
  return (
    <>
      <Composition
        id="gradient"
        component={Gradient}
        durationInFrames={120}
        width={720}
        height={1280}
        fps={30}
        defaultProps={{ height: "1280" }}
      />
      <Composition
        id="Scene2"
        component={Scene2}
        durationInFrames={150}
        width={720}
        height={1280}
        fps={30}
      />
      <Composition
        id="Scene3"
        component={Scene3}
        durationInFrames={150}
        width={720}
        height={1280}
        fps={30}
        defaultProps={{ text: "World" }}
      />
    </>
  );
};
