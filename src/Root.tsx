import React from "react";
import { Composition } from "remotion";
import { AnimatedText, AnimatedTextProps } from "./AnimatedText";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition<React.FC<AnimatedTextProps>, AnimatedTextProps>
        id="AnimatedText"
        component={AnimatedText}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: "Judul Utama Video",
          subtitle: "Subjudul muncul setelah jeda 12 frame",
        }}
      />
    </>
  );
};
