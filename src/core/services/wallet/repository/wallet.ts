import { baseURL } from '@infrastructure/baseURL';
import http from '@infrastructure/http';

class walletProvider extends http {
  constructor() {
    super({ baseURL: baseURL, path: 'valuable_wallets' });
  }

  public getValuableWallets = async (params: unknown) => await this.httpService.get('', { params });
}
const walletService = new walletProvider();
export default walletService;
