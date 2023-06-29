import { Composition } from "remotion";
import { Gradient } from "./Gradient";
import { Scene3 } from "./Scene3";
import React from "react";

export const MyVideo = () => {
  return (
    <>
      <Composition
        component={Gradient}
        durationInFrames={120}
        width={720}
        height={1280}
        fps={30}
        id="gradient"
        defaultProps={{ height: "1280" }}
      />
      <Composition
        component={Scene3}
        durationInFrames={120}
        width={720}
        height={1280}
        fps={30}
        id="Scene3"
        defaultProps={{ text: "World" }}
      />
    </>
  );
};
