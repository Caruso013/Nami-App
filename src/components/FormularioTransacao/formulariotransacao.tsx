import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formSchema = z.object({
  data: z.date({
    required_error: 'Uma data é necessária.',
  }).nullable(), // Alteração aqui
  valor: z.string({
    required_error: 'Um valor é necessário.',
  }),
  descricao: z.string({
    required_error: 'Uma descrição é necessária.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function FormularioTransacao() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      data: null, // Alteração aqui, para condizer com o .nullable()
      valor: '',
      descricao: '',
    },
  });

  const [startDate, setStartDate] = useState<Date | null>(null);

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormItem>
          <FormLabel>Data</FormLabel>
          <FormControl>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => {
                setStartDate(date);
                form.setValue('data', date);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Valor</FormLabel>
          <FormControl>
            <Input placeholder="Valor" {...form.register('valor')} />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel>Descrição</FormLabel>
          <FormControl>
            <Input placeholder="Descrição" {...form.register('descricao')} />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}