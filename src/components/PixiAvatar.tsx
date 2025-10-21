import { useEffect, useRef } from "react";
import { Application, Assets, Container } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi-v8";

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
  height = 200,
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
            alias: "spineSkeleton",
            src: "https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pro.skel",
          },
          {
            alias: "spineAtlas",
            src: "https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pma.atlas",
          },
          {
            alias: "sky",
            src: "https://pixijs.com/assets/tutorials/spineboy-adventure/sky.png",
          },
          {
            alias: "background",
            src: "https://pixijs.com/assets/tutorials/spineboy-adventure/background.png",
          },
          {
            alias: "midground",
            src: "https://pixijs.com/assets/tutorials/spineboy-adventure/midground.png",
          },
          {
            alias: "platform",
            src: "https://pixijs.com/assets/tutorials/spineboy-adventure/platform.png",
          },
        ]);

        const spineBoy = {
          view: new Container(),

          spine: Spine.from({
            skeleton: "spineSkeleton",
            atlas: "spineAtlas",
          }),
        };

        spineBoy.view.addChild(spineBoy.spine);

        spineBoy.view.x = app.screen.width / 2;
        spineBoy.view.y = app.screen.height - 80;
        spineBoy.spine.scale.set(0.5);

        container.addChild(spineBoy.view);

        let t = 0;
        app.ticker.add(() => {
          t += 0.05;
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
    <div className={className} ref={canvasRef} style={{ width, height }} />
  );
}
