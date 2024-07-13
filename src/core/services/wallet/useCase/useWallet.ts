import { useQuery } from '@tanstack/react-query';
import { getValuableWallets } from '@services/wallet/repository';

export const useGetValuableWallets = (params: unknown) =>
  useQuery({ queryKey: ['wallet', params], queryFn: () => getValuableWallets(params) });
