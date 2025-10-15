interface WinScreenProps {
  readonly score: number;
  readonly onRestart: () => void;
}

export default function WinScreen({ score, onRestart }: WinScreenProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Você Venceu!</h1>
      <h2 className="text-2xl font-bold">Sua pontuação: {score}</h2>
      <button
        onClick={onRestart}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded"
      >
        Jogar de novo
      </button>
    </div>
  );
}
