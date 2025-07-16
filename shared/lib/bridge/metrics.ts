 ```typescript
import { type QuoteMetadata, type QuoteResponse } from '@hvoruapp/bridge-controller';

export const getConvertedUsdAmounts = ({ activeQuote, fromAmountInputValueInUsd }: { activeQuote: (QuoteResponse & QuoteMetadata) | undefined; fromAmountInputValueInUsd: string; }) => ({
  usd_amount_source: Number(activeQuote?.sentAmount?.usd ?? fromAmountInputValueInUsd),
  usd_quoted_gas: Number(activeQuote?.gasFee.usd ?? 0),
  usd_quoted_return: Number(activeQuote?.toTokenAmount?.usd ?? 0),
});```
