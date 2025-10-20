import style from "./termsScreen.module.scss";

interface TermsScreenProps {
  readonly onAccept: () => void;
}

export default function TermsScreen({ onAccept }: TermsScreenProps) {
  return (
    <div className={style.terms}>
      <div className=".content">
        <h2 className="heading">Termos de Uso</h2>
        <p>
          Este aplicativo é um jogo de perguntas e respostas com premiação
          fictícia. Todos os valores exibidos no jogo têm caráter apenas
          ilustrativo e não representam dinheiro real. Nenhum prêmio, recompensa
          ou pagamento em dinheiro será concedido ao jogador.
          <br />
          Ao continuar, você declara estar ciente de que o jogo é apenas para
          entretenimento.
        </p>
      </div>
      <button className="button" onClick={onAccept}>
        Aceitar
      </button>
    </div>
  );
}
