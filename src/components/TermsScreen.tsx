interface TermsScreenProps {
  readonly onAccept: () => void;
}

export default function TermsScreen({ onAccept }: TermsScreenProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Termos de Uso</h1>
      <div className="max-w-xl text-sm mb-6">
        Aqui vão os termos resumidos. Você deve aceitar para continuar.
      </div>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded"
        onClick={onAccept}
      >
        Aceitar
      </button>
    </div>
  );
}
