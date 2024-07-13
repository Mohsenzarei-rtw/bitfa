import { TableColumns } from '@components/table/types';

export const walletTableColumns: TableColumns[] = [
  {
    field: 'netProfit',
    headerTitle: 'Net Profit',
    linkAddress: 'walletAddress',
  },
  {
    field: 'walletAddress',
    headerTitle: 'Wallet Address',
    linkAddress: 'walletAddress',
  },
];
