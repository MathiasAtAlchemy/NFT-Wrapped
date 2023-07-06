import { Player } from "@remotion/player";
import { Main } from "../Remotion/Main";

export const Video = ({ ranking, price, media, topNFT }) => {
  return (
    <Player
      component={Main}
      durationInFrames={210 + 210 + 150}
      compositionWidth={720}
      compositionHeight={1280}
      fps={30}
      style={{
        width: 720,
        height: 1280,
      }}
      controls
      inputProps={{ ranking, price, media, topNFT }}
    />
  );
};
