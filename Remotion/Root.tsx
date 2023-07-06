import { Composition, staticFile } from "remotion";
import { Gradient } from "./Gradient";
import { Scene3 } from "./Scene3";
import React from "react";
import { Scene2 } from "./Scene2";
import { Scene2Test } from "./Scene2Test";
import { Main } from "./Main";
import { Scene1 } from "./Scene1";
import { GradientCircle } from "./GradientCircle";
import { Wrapped } from "./Wrapped";

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
        id="Scene1"
        component={Scene1}
        durationInFrames={210}
        width={720}
        height={1280}
        fps={30}
        defaultProps={{
          media: [
            staticFile("NFTImage.jpg"),
            staticFile("NFTImage2.jpg"),
            staticFile("NFTImage3.jpg"),
            staticFile("NFTImage.jpg"),
          ],
          ranking: ["NFT1", "NFT2", "NFT3", "NFT4", "NFT5"],
        }}
      />
      <Composition
        id="GradientCircle"
        component={GradientCircle}
        durationInFrames={210}
        width={720}
        height={1280}
        fps={30}
      />
      <Composition
        id="Wrapped"
        component={Wrapped}
        durationInFrames={210}
        width={720}
        height={1280}
        fps={30}
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
        id="Scene2Test"
        component={Scene2Test}
        width={720}
        height={1280}
        durationInFrames={210}
        fps={30}
        defaultProps={{
          ranking: ["NFT1", "NFT2", "NFT3", "NFT4", "NFT5"] as [
            string,
            string,
            string,
            string,
            string
          ],
          price: ["1", "2", "3", "4", "5"] as [
            string,
            string,
            string,
            string,
            string
          ],
        }}
      />
      <Composition
        id="Scene3"
        component={Scene3}
        durationInFrames={150}
        width={720}
        height={1280}
        fps={30}
        defaultProps={{
          topNFT: {
            media: staticFile("NFTImage.jpg"),
            collectionName: "Azuki",
            title: "6370",
          },
        }}
      />
      <Composition
        id="Main"
        component={Main}
        durationInFrames={210 + 210 + 150}
        width={720}
        height={1280}
        fps={30}
        defaultProps={{
          ranking: ["NFT1", "NFT2", "NFT3", "NFT4", "NFT5"],
          price: ["$500", "$400", "$300", "$200", "$100"],
          media: [
            staticFile("NFTImage.jpg"),
            staticFile("NFTImage2.jpg"),
            staticFile("NFTImage3.jpg"),
            staticFile("NFTImage.jpg"),
          ],
          topNFT: {
            media: staticFile("NFTImage.jpg"),
            collectionName: "Azuki",
            title: "6370",
          },
        }}
      />
    </>
  );
};
