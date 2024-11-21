import { ChainId, Token } from '@defolym3/do3-sdk-core';
import { WRAPPED_NATIVE_CURRENCY } from './chains';

export type AddressMap = { [chainId: number]: string | undefined };

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number): string => {
  console.log(`SWAP_ROUTER_02_ADDRESSES: not implemented. chain id ${chainId}`);
  return '0xEE0A7E2100F4b98f549230E0e843041A96f018a9'; //minato
};

export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';

export const WETH9: {
  [chainId in ChainId]: Token;
} = WRAPPED_NATIVE_CURRENCY;
