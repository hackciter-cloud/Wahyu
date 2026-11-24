import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type AnimatedTextProps = {
  title: string;
  subtitle?: string;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: {
      damping: 200,
      mass: 0.8,
      stiffness: 120,
    },
  });

  const subtitleProgress = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: {
      damping: 200,
      mass: 0.8,
      stiffness: 120,
    },
  });

  const titleTranslateY = interpolate(titleProgress, [0, 1], [40, 0]);
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);

  const subtitleTranslateY = interpolate(subtitleProgress, [0, 1], [30, 0]);
  const subtitleOpacity = interpolate(subtitleProgress, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#111827",
        justifyContent: "center",
        alignItems: "center",
        padding: 64,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "85%",
          textAlign: "center",
          transform: `translateY(${titleTranslateY}px)`,
          opacity: titleOpacity,
          color: "#F9FAFB",
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.15,
        }}
      >
        {title}
      </div>

      {subtitle ? (
        <div
          style={{
            maxWidth: "80%",
            textAlign: "center",
            marginTop: 24,
            transform: `translateY(${subtitleTranslateY}px)`,
            opacity: subtitleOpacity,
            color: "#9CA3AF",
            fontSize: 36,
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
