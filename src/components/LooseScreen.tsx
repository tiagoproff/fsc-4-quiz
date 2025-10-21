import styles from "./looseScreen.module.scss";

interface LooseScreenProps {
  readonly onRestart: () => void;
}

export default function LooseScreen({ onRestart }: LooseScreenProps) {
  return (
    <div className={styles.loose}>
      <div className="loose-content">
        <h1 className="loose-inner">Você Perdeu</h1>
        <button onClick={onRestart} className="loose-button">
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
