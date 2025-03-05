interface TransacaoProps {
  transacao: Transacao;
}

interface Transacao {
  data: string;
  descricao: string;
  valor: number;
  tipo: 'receita' | 'despesa';
}

function Transacao({ transacao }: TransacaoProps) {
  return (
    <div className="border p-4 rounded shadow">
      <p>Data: {transacao.data}</p>
      <p>Descrição: {transacao.descricao}</p>
      <p>Valor: {transacao.valor}</p>
      <p>Tipo: {transacao.tipo}</p>
    </div>
  );
}

export default Transacao;