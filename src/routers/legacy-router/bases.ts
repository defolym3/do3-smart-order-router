import { ChainId, Token } from '@defolym3/do3-sdk-core';

import {
  ITokenProvider,
  USDC_BASE,
  USDC_SHAPE_TESTNET,
  USDC_ARBITRUM,
  ARB_ARBITRUM,
  DAI_ARBITRUM,
  TUNA_BASE,
  USDT_ARBITRUM,
  WBTC_ARBITRUM,
  WBTC_MODE,
  DAI_MODE,
  USDC_MODE,
  USDT_MODE,
} from '../../providers/token-provider';
import { WRAPPED_NATIVE_CURRENCY } from '../../util/chains';

type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

export const BASES_TO_CHECK_TRADES_AGAINST = (_tokenProvider: ITokenProvider): ChainTokenList => {
  return {
  [ChainId.AMOY]:[],
  [ChainId.ARBITRUM]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM],
    WBTC_ARBITRUM,
    DAI_ARBITRUM,
    USDC_ARBITRUM,
    USDT_ARBITRUM,
    ARB_ARBITRUM,
  ],
  [ChainId.ARBITRUM_SEPOLIA]: [],
  [ChainId.AVALANCHE]: [],
  [ChainId.BASE]: [TUNA_BASE, USDC_BASE, WRAPPED_NATIVE_CURRENCY[ChainId.BASE]],
  [ChainId.BASE_SEPOLIA]: [],
  [ChainId.BSC]: [],
  [ChainId.BSC_TESTNET]: [],
  [ChainId.FRAX_TESTNET]: [WRAPPED_NATIVE_CURRENCY[ChainId.FRAX_TESTNET]],
  [ChainId.FUJI]: [],
  [ChainId.HEDERA]: [],
  [ChainId.HEDERA_TESTNET]: [],
  [ChainId.HOLESKY]: [],
  [ChainId.KAIA]: [],
  [ChainId.KAIROS]: [],
  [ChainId.METIS_TESTNET]:[],
  [ChainId.MODE]: [WRAPPED_NATIVE_CURRENCY[ChainId.MODE], WBTC_MODE, DAI_MODE, USDC_MODE, USDT_MODE],
  [ChainId.MODE_TESTNET]: [WRAPPED_NATIVE_CURRENCY[ChainId.MODE_TESTNET]],
  [ChainId.OKX]: [],
  [ChainId.OPBNB_TESTNET]:  [],
  [ChainId.OPTIMISM]: [],
  [ChainId.SCROLL]: [],
  [ChainId.SCROLL_SEPOLIA]: [],
  [ChainId.SEPOLIA]: [],
  [ChainId.SHAPE]: [],
  [ChainId.SHAPE_TESTNET]: [USDC_SHAPE_TESTNET, WRAPPED_NATIVE_CURRENCY[ChainId.SHAPE_TESTNET]],
  [ChainId.SONEIUM_TESTNET]: [],
  [ChainId.UNICHAIN_TESTNET]:[],
  };
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (): // tokenProvider: ITokenProvider
Promise<{
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    
  };
};
