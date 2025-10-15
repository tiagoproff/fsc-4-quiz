import { useEffect } from "react";

interface LoadingScreenProps {
  readonly onRestart: () => void;
}
export default function LoadingScreen({ onRestart }: LoadingScreenProps) {
  useEffect(() => {
    const t = setTimeout(onRestart, 500);
    return () => clearTimeout(t);
  }, [onRestart]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-4">Loading...</h1>
    </div>
  );
}
