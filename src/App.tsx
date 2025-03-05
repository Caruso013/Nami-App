import React from 'react';
import FormularioTransacao from './components/FormularioTransacao/FormularioTransacao';
import ListaTransacoes from './components/ListaTransacoes/ListaTransacoes';
import Resumo from './components/Resumo/Resumo';
import useTransacoes from './hooks/useTransacoes';

function App() {
  const {
    transacoes,
    adicionarTransacao,
    calcularSaldo,
    calcularReceitas,
    calcularDespesas,
  } = useTransacoes();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Planilha Financeira</h1>
      <FormularioTransacao adicionarTransacao={adicionarTransacao} />
      <Resumo
        saldo={calcularSaldo()}
        receitas={calcularReceitas()}
        despesas={calcularDespesas()}
      />
      <ListaTransacoes transacoes={transacoes} />
    </div>
  );
}

export default App;