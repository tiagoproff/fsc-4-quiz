import { useEffect, useRef } from "react";
import { Application, Assets, Container } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v8";

import styles from "./pixiAvatar.module.scss";

interface PixiAvatarProps {
  readonly className?: string;
  readonly status?: "neutral" | "happy" | "sad" | "surprise";
  readonly width?: number;
  readonly height?: number;
}

export default function PixiAvatar({
  className = "",
  status = "neutral",
  width = 200,
  height = 380,
}: PixiAvatarProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application>(null);

  useEffect(() => {
    (async () => {
      const app = new Application();

      await app.init({
        width,
        height,
        backgroundAlpha: 0,
        antialias: true,
        resolution: window.devicePixelRatio,
      });

      if (canvasRef.current) {
        canvasRef.current.innerHTML = "";
        canvasRef.current.appendChild(app.canvas);
      }

      appRef.current = app;

      const container = new Container();
      app.stage.addChild(container);

      const loadAvatar = async () => {
        await Assets.load([
          {
            alias: "avatar-data",
            src: "../assets/avatar/skeleton.json",
          },
          {
            alias: "avatar-atlas",
            src: "../assets/avatar/skeleton.atlas",
          },
        ]);

        const spineBoy = {
          view: new Container(),
          spine: Spine.from({ skeleton: "avatar-data", atlas: "avatar-atlas" }),
        };

        spineBoy.view.addChild(spineBoy.spine);

        spineBoy.view.x = app.screen.width / 2;
        spineBoy.view.y = app.screen.height / 2;
        spineBoy.spine.scale.set(0.5);

        spineBoy.spine.x = app.screen.width / 2 - spineBoy.spine.width / 2;
        spineBoy.spine.y =
          app.screen.height / 2 - (spineBoy.spine.height / 2) * 0.5;

        container.addChild(spineBoy.view);

        let t = 0;
        app.ticker.add(() => {
          t += 0.025;
          spineBoy.view.y = height / 2 + Math.sin(t) * 5;
        });
      };

      loadAvatar();

      return () => {
        app.destroy(true);
      };
    })();
  }, [status, width, height]);

  return (
    <div
      className={`${className} ${styles.avatar}`}
      ref={canvasRef}
      style={{ width, height }}
    />
  );
}
