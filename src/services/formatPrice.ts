import type { Currency } from "@/types/currency";
import type { Price } from "@/types/price";

export function formatPrice(amount: number, currency: Currency): string {
  amount = amount / 100

  let currencySymbol = ''


  switch (currency) {
    case 'USD':
      currencySymbol = '$'
  }

  return currencySymbol + amount
}