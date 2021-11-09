export declare function insertThousandSeparator(number: string | number): string;
export interface FormatMoneyOptions {
    decimalPlaces?: number;
}
export declare const isDefined: <T>(value: T | undefined) => value is T;
export declare const isString: (value: unknown) => value is String;
export declare const formatMoney: (value: string | number | undefined, currencyOrOptions?: string | FormatMoneyOptions) => string;
