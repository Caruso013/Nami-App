import React from 'react';
import Transacao from '../Transacao/Transacao';
import styles from './ListaTransacoes.module.css';

interface ListaTransacoesProps {
  transacoes: Transacao[];
}

interface TransacaoData {
  data: string;
  descricao: string;
  valor: number;
  tipo: 'receita' | 'despesa';
}

function ListaTransacoes({ transacoes }: ListaTransacoesProps) {
  return (
    <ul className={styles.lista}>
      {transacoes.map((transacao, index) => (
        <li key={index}>
          <Transacao transacao={transacao} />
        </li>
      ))}
    </ul>
  );
}

export default ListaTransacoes;