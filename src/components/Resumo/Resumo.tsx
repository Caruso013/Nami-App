interface ResumoProps {
  saldo: number;
  receitas: number;
  despesas: number;
}

function Resumo({ saldo, receitas, despesas }: ResumoProps) {
  return (
    <div className="border p-4 rounded shadow">
      <p>Saldo: {saldo}</p>
      <p>Receitas: {receitas}</p>
      <p>Despesas: {despesas}</p>
    </div>
  );
}

export default Resumo;