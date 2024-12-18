import { parseUnits } from '@ethersproject/units';
import { Currency, CurrencyAmount as CurrencyAmountRaw } from '@defolym3/do3-sdk-core';
import { FeeAmount } from '@defolym3/do3-v3-sdk2';
import JSBI from 'jsbi';

export class CurrencyAmount extends CurrencyAmountRaw<Currency> {}

export const MAX_UINT160 = '0xffffffffffffffffffffffffffffffffffffffff';

// Try to parse a user entered amount for a given token
export function parseAmount(value: string, currency: Currency): CurrencyAmount {
  const typedValueParsed = parseUnits(value, currency.decimals).toString();
  return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed));
}

export function parseFeeAmount(feeAmountStr: string) {
  switch (feeAmountStr) {
    case '10000':
      return FeeAmount.HIGH;
    case '2500':
      return FeeAmount.MEDIUM;
    case '450':
      return FeeAmount.LOW;
    case '80':
      return FeeAmount.LOWEST;
    default:
      throw new Error(`Fee amount ${feeAmountStr} not supported.`);
  }
}

export function unparseFeeAmount(feeAmount: FeeAmount) {
  switch (feeAmount) {
    case FeeAmount.HIGH:
      return '10000';
    case FeeAmount.MEDIUM:
      return '2500';
    case FeeAmount.LOW:
      return '450';
    case FeeAmount.LOWEST:
      return '80';
    default:
      throw new Error(`Fee amount ${feeAmount} not supported.`);
  }
}
