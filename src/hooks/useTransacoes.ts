import { useState, useEffect } from 'react';

interface Transacao {
  data: Date;
  descricao: string;
  valor: number;
  tipo: 'receita' | 'despesa';
  categoria: string;
}

function useTransacoes() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  useEffect(() => {
    const transacoesSalvas = localStorage.getItem('transacoes');
    if (transacoesSalvas) {
      setTransacoes(JSON.parse(transacoesSalvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
  }, [transacoes]);

  const adicionarTransacao = (transacao: Transacao) => {
    setTransacoes([...transacoes, transacao]);
  };

  const calcularSaldo = () => {
    return transacoes.reduce((saldo, transacao) => {
      if (transacao.tipo === 'receita') {
        return saldo + transacao.valor;
      } else {
        return saldo - transacao.valor;
      }
    }, 0);
  };

  const calcularReceitas = () => {
    return transacoes
      .filter((transacao) => transacao.tipo === 'receita')
      .reduce((total, transacao) => total + transacao.valor, 0);
  };

  const calcularDespesas = () => {
    return transacoes
      .filter((transacao) => transacao.tipo === 'despesa')
      .reduce((total, transacao) => total + transacao.valor, 0);
  };

  return {
    transacoes,
    adicionarTransacao,
    calcularSaldo,
    calcularReceitas,
    calcularDespesas,
  };
}

export default useTransacoes;