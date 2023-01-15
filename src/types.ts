export interface RequestArguments {
  readonly method: string
  readonly params?: readonly unknown[] | object
}

export interface ProviderConnectInfo {
  readonly chainId: string;
}

export interface ProviderRpcError extends Error {
  code: number;
  data?: unknown;
}

export interface ProviderMessage {
  readonly type: string;
  readonly data: unknown;
}

export type IEthereumProvider = {
  request(args: RequestArguments): Promise<unknown>
  on(event: 'connect', listener: (info: ProviderConnectInfo) => void): IEthereumProvider
  on(event: 'disconnect', listener: (error: ProviderRpcError) => void): IEthereumProvider
  on(event: 'chainChanged', listener: (chainId: string) => void): IEthereumProvider
  on(event: 'accountsChanged', listener: (accounts: string[]) => void): IEthereumProvider
  on(event: 'message', listener: (message: ProviderMessage) => void): IEthereumProvider
  removeListener?(event: string, listener?: any): void
  disconnect?(): Promise<void>
}
