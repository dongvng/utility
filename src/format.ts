const commaPositionRegex = /\B(?=(\d{3})+(?!\d))/g;

export function insertThousandSeparator(number: string | number): string {
  const numString = String(number);
  if (numString.includes(".")) {
    const [integer, decimal] = numString.split(".");
    return `${integer.replace(commaPositionRegex, ",")}.${decimal}`;
  }
  return numString.replace(commaPositionRegex, ",");
}

export interface FormatMoneyOptions {
  decimalPlaces?: number;
}

export const isDefined = <T>(value: T | undefined): value is T =>
  typeof value !== "undefined";

export const isString = (value: unknown): value is String => {
  return typeof value === "string";
};

export const formatMoney = (
  value: string | number | undefined,
  currencyOrOptions: string | FormatMoneyOptions = ""
): string => {
  if (!isDefined(value)) {
    return "";
  }

  const numValue = Number(value);
  const decimalPlaces =
    !isString(currencyOrOptions) && isDefined(currencyOrOptions.decimalPlaces)
      ? currencyOrOptions.decimalPlaces
      : 2;

  if (isNaN(numValue)) {
    return value as string;
  }

  return insertThousandSeparator(numValue.toFixed(decimalPlaces));
};
