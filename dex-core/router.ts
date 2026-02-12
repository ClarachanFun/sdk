export function route(amount: number, pair: string) {
  return {
    pair,
    amountIn: amount,
    expectedOut: amount * 0.98,
  };
}
