import { isDefined } from './type-guard';

const commaPositionRegex = /\B(?=(\d{3})+(?!\d))/g;

export function insertThousandSeparator(number: string | number): string {
  const numString = String(number);
  if (numString.includes('.')) {
    const [integer, decimal] = numString.split('.');
    return `${integer.replace(commaPositionRegex, ',')}.${decimal}`;
  }
  return numString.replace(commaPositionRegex, ',');
}

export interface FormatMoneyOptions {
  decimalPlaces?: number;
}

/**
 * format number to display the value with thousand seperator
 * default with 2 decimals
 *
 * @param value
 * @param options
 * @returns string
 */
export const formatMoney = (
  value: string | number | undefined,
  options: FormatMoneyOptions = {}
) => {
  if (!isDefined(value)) {
    return '';
  }

  const numValue = Number(value);
  const decimalPlaces = isDefined(options.decimalPlaces)
    ? options.decimalPlaces
    : 2;

  if (isNaN(numValue)) {
    return value as string;
  }

  return insertThousandSeparator(numValue.toFixed(decimalPlaces));
};
