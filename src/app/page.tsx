import { Table } from './components/table';
import { getValuableWallets } from '@/core/services/wallet/useCase';
import { walletTableColumns } from './config/walletTableColumns';

export default async function Home() {
  const data = await getValuableWallets({ network: 'eth', page: 1, limit: 5 });
  return (
    <main>
      <Table rows={data} columns={walletTableColumns} />
    </main>
  );
}
