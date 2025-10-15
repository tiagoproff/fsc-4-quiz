interface LooseScreenProps {
  readonly onRestart: () => void;
}

export default function LooseScreen({ onRestart }: LooseScreenProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Você Perdeu</h1>
      <button
        onClick={onRestart}
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded"
      >
        Tentar novamente
      </button>
    </div>
  );
}
