import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Transacao {
  id: number;
  data: string;
  valor: number;
  descricao: string;
}

export function ListaTransacoes() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  useEffect(() => {
    // Simulação de busca de dados (substitua por sua lógica de busca real)
    const dadosSimulados: Transacao[] = [
      { id: 1, data: '2023-10-26', valor: 100, descricao: 'Compra no supermercado' },
      { id: 2, data: '2023-10-27', valor: 50, descricao: 'Café da manhã' },
      { id: 3, data: '2023-10-28', valor: 200, descricao: 'Conta de luz' },
    ];
    setTransacoes(dadosSimulados);
  }, []);

  return (
    <div>
      <Table>
        <TableCaption>Lista de Transações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Data</TableHead>
            <TableHead>Valor</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transacoes.map((transacao) => (
            <TableRow key={transacao.id}>
              <TableCell className="font-medium">{transacao.data}</TableCell>
              <TableCell>{transacao.valor}</TableCell>
              <TableCell>{transacao.descricao}</TableCell>
              <TableCell className="text-right">
                <Button size="icon">Editar</Button>
                <Button size="icon" variant="destructive">
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}