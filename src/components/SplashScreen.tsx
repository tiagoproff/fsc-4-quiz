import { useEffect } from "react";

interface SplashScreenProps {
  readonly onRestart: () => void;
}
export default function SplashScreen({ onRestart }: SplashScreenProps) {
  useEffect(() => {
    const t = setTimeout(onRestart, 900);
    return () => clearTimeout(t);
  }, [onRestart]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <img src="/logo.png" alt="logo" className="w-48" />
    </div>
  );
}
