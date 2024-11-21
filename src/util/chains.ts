import { ChainId, Ether, NativeCurrency, Token } from '@defolym3/do3-sdk-core';

export const SUPPORTED_CHAINS: ChainId[] = [ChainId.BASE, ChainId.SHAPE_TESTNET, ChainId.MODE];

export const V2_SUPPORTED = [ChainId.BASE, ChainId.SHAPE_TESTNET, ChainId.MODE];

export const HAS_L1_FEE = [ChainId.BASE, ChainId.SHAPE_TESTNET, ChainId.MODE];

export const ID_TO_CHAIN_ID = (id: number): ChainId => {
  switch (id) {
    case 80002:
      return ChainId.AMOY 
    case  42161:
      return ChainId.ARBITRUM 
    case  421614: 
      return ChainId.ARBITRUM_SEPOLIA 
    case  43114:
      return ChainId.AVALANCHE 
    case  8453:
      return ChainId.BASE 
    case  84532:
      return ChainId.BASE_SEPOLIA 
    case  56:
      return ChainId.BSC 
    case  97:
      return ChainId.BSC_TESTNET 
    case  2522:
      return ChainId.FRAX_TESTNET 
    case  43113:
      return ChainId.FUJI 
    case  295:
      return ChainId.HEDERA 
    case  296:
      return ChainId.HEDERA_TESTNET 
    case  17000:
      return ChainId.HOLESKY 
    case  8217:
      return ChainId.KAIA 
    case  1001:
      return ChainId.KAIROS 
    case  59902:
      return ChainId.METIS_TESTNET 
    case  34443:
      return ChainId.MODE 
    case  919:
      return ChainId.MODE_TESTNET 
    case  66:
      return ChainId.OKX 
    case  5611:
      return ChainId.OPBNB_TESTNET 
    case  10:
      return ChainId.OPTIMISM 
    case  534352:
      return ChainId.SCROLL 
    case  534351:
      return ChainId.SCROLL_SEPOLIA 
    case  11155111:
      return ChainId.SEPOLIA 
    case  360:
      return ChainId.SHAPE
    case  11011:
      return ChainId.SHAPE_TESTNET 
    case  1946:
      return ChainId.SONEIUM_TESTNET 
    case  1301:
      return ChainId.UNICHAIN_TESTNET 
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = 'mainnet',
  AMOY = 'polygon-amoy',
  ARBITRUM = 'arbitrum-one',
  ARBITRUM_SEPOLIA = 'arbitrum-sepolia',
  AVALANCHE = 'avalanche-c-chain',
  BASE = 'base-mainnet',
  BASE_SEPOLIA = 'base-sepolia',
  BSC = 'bsc-mainnet',
  BSC_TESTNET = 'bsc-testnet',
  FRAX_TESTNET = 'frax-testnet',
  FUJI = 'avalanche-fuji',
  HEDERA = 'hedera-mainnet',
  HEDERA_TESTNET = 'hedera-testnet',
  HOLESKY = 'holesky',
  KAIA = 'kaia-mainnet',
  KAIROS = 'kairos-testnet',
  METIS_TESTNET = 'metis-testnet',
  MODE = 'mode-mainnet',
  MODE_TESTNET = 'mode-testnet',
  OKX = 'okx-mainnet',
  OPBNB_TESTNET = 'opbnb-testnet',
  OPTIMISM = 'optimism',
  SCROLL = 'scroll-mainnet',
  SCROLL_SEPOLIA = 'scroll-sepolia',
  SEPOLIA = 'sepolia',
  SHAPE= 'shape-mainnet',
  SHAPE_TESTNET = 'shape-testnet',
  SONEIUM_TESTNET = 'soneium-testnet',
  UNICHAIN_TESTNET = 'unichain-testnet',
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'POL',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVALANCHE = 'AVAX',
}

export const NATIVE_NAMES_BY_ID: { [chainId: number]: string[] } = {
  [ChainId.BASE]: ['ETH', 'ETHER', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
  [ChainId.MODE]: ['ETH', 'ETHER', '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
};

export const NATIVE_CURRENCY: { [chainId: number]: NativeCurrencyName } = {
  [ChainId.BASE]: NativeCurrencyName.ETHER,
  [ChainId.MODE]: NativeCurrencyName.ETHER,
};

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 80002:
      return ChainName.AMOY 
    case  42161:
      return ChainName.ARBITRUM 
    case  421614: 
      return ChainName.ARBITRUM_SEPOLIA 
    case  43114:
      return ChainName.AVALANCHE 
    case  8453:
      return ChainName.BASE 
    case  84532:
      return ChainName.BASE_SEPOLIA 
    case  56:
      return ChainName.BSC 
    case  97:
      return ChainName.BSC_TESTNET 
    case  2522:
      return ChainName.FRAX_TESTNET 
    case  43113:
      return ChainName.FUJI 
    case  295:
      return ChainName.HEDERA 
    case  296:
      return ChainName.HEDERA_TESTNET 
    case  17000:
      return ChainName.HOLESKY 
    case  8217:
      return ChainName.KAIA 
    case  1001:
      return ChainName.KAIROS 
    case  59902:
      return ChainName.METIS_TESTNET 
    case  34443:
      return ChainName.MODE 
    case  919:
      return ChainName.MODE_TESTNET 
    case  66:
      return ChainName.OKX 
    case  5611:
      return ChainName.OPBNB_TESTNET 
    case  10:
      return ChainName.OPTIMISM 
    case  534352:
      return ChainName.SCROLL 
    case  534351:
      return ChainName.SCROLL_SEPOLIA 
    case  11155111:
      return ChainName.SEPOLIA 
    case  360:
      return ChainName.SHAPE
    case  11011:
      return ChainName.SHAPE_TESTNET 
    case  1946:
      return ChainName.SONEIUM_TESTNET 
    case  1301:
      return ChainName.UNICHAIN_TESTNET 
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) => c.toString()) as string[];

export const ID_TO_PROVIDER = (id: ChainId): string => {
  switch (id) {
    case ChainId.BASE:
      return process.env.JSON_RPC_PROVIDER_BASE || "https://base-rpc.publicnode.com";
    case ChainId.SHAPE_TESTNET:
      return process.env.JSON_RPC_PROVIDER_SHAPE__TESTNET || "https://sepolia.shape.network";  
    case ChainId.SONEIUM_TESTNET:
      return process.env.JSON_RPC_PROVIDER_SONEIUM_TESTNET || "https://rpc.minato.soneium.org";  
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in ChainId]: Token } = {
  [ChainId.AMOY]:new Token(ChainId.AMOY, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ARBITRUM]: new Token(
    ChainId.ARBITRUM,
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_SEPOLIA]: new Token(ChainId.ARBITRUM_SEPOLIA, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BASE]: new Token(ChainId.BASE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BASE_SEPOLIA]: new Token(ChainId.BASE_SEPOLIA, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BSC]: new Token(ChainId.BSC, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FRAX_TESTNET]: new Token(
    ChainId.FRAX_TESTNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.FUJI]: new Token(ChainId.FUJI, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.HEDERA]: new Token(ChainId.HEDERA, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.HOLESKY]: new Token(ChainId.HOLESKY, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KAIA]: new Token(ChainId.KAIA, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KAIROS]: new Token(ChainId.KAIROS, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.METIS_TESTNET]:new Token(ChainId.METIS_TESTNET, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MODE]: new Token(ChainId.MODE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MODE_TESTNET]: new Token(
    ChainId.MODE_TESTNET,
    '0xeb72756ee12309Eae82a0deb9787e69f5b62949c',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OKX]: new Token(ChainId.OKX, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.OPBNB_TESTNET]: new Token(ChainId.OPBNB_TESTNET, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SCROLL]: new Token(
    ChainId.SCROLL,
    '0x5300000000000000000000000000000000000004',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SCROLL_SEPOLIA]: new Token(
    ChainId.SCROLL_SEPOLIA,
    '0x5300000000000000000000000000000000000004',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.SHAPE]: new Token(ChainId.SHAPE, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.SHAPE_TESTNET]: new Token(
    ChainId.SHAPE_TESTNET,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.SONEIUM_TESTNET]: new Token(ChainId.SONEIUM_TESTNET, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.UNICHAIN_TESTNET]: new Token(ChainId.UNICHAIN_TESTNET, '0xEE0A7E2100F4b98f549230E0e843041A96f018a9', 18, 'WETH', 'Wrapped Ether'),
};

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
      return WRAPPED_NATIVE_CURRENCY[this.chainId as ChainId];
    }
    throw new Error('Unsupported chain ID');
  }

  private static _cachedExtendedEther: {
    [chainId: number]: NativeCurrency;
  } = {};

  public static onChain(chainId: number): ExtendedEther {
    return this._cachedExtendedEther[chainId] ?? (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId));
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};

export function nativeOnChain(chainId: number): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined) {
    return cachedNativeCurrency[chainId]!;
  } else {
    cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId]!;
}
