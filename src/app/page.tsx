import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BadgeDollarSign, DollarSign, Percent, Users } from 'lucide-react';
import ChartOverview from '../components/chart';
import Sales from '../components/sales';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className='sm:ml-14 p-4'>
        <section className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>
                        Total Vendas
                    </CardTitle>
                    <DollarSign  className='ml-auto w-5 h-5'/>
                </div>
                <CardDescription>
                    Total vendas em 90 dias
                </CardDescription>

                <CardContent>
                    <p className='text-base sm:text-lg font-bold'>R$ 40.000</p>
                </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>
                        Novos Clientes
                    </CardTitle>
                    <Users  className='ml-auto w-5 h-5'/>
                </div>
                <CardDescription>
                    Novos clientes em 30 dias
                </CardDescription>

                <CardContent>
                    <p className='text-base sm:text-lg font-bold'>234</p>
                </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>
                        Total Pedidos
                    </CardTitle>
                    <BadgeDollarSign  className='ml-auto w-5 h-5'/>
                </div>
                <CardDescription>
                    Total de pedidos 30 dias
                </CardDescription>

                <CardContent>
                    <p className='text-base sm:text-lg font-bold'>1867</p>
                </CardContent>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
                <div className='flex items-center justify-center'>
                    <CardTitle className='text-lg sm:text-xl text-gray-800'>
                        Pedidos Hoje
                    </CardTitle>
                    <Percent  className='ml-auto w-5 h-5'/>
                </div>
                <CardDescription>
                    Total de pedidos hoje
                </CardDescription>

                <CardContent>
                    <p className='text-base sm:text-lg font-bold'>38</p>
                </CardContent>
            </CardHeader>
          </Card>

        </section>

        <section className='mt-4 flex flex-col md:flex-row gap-4'>
            <ChartOverview/>
            <Sales />
        </section>
        <Footer/>
    </main>
  );
}
