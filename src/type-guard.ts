export const isDefined = <T>(value: T | undefined): value is T =>
  typeof value !== 'undefined';

export const isString = (value: unknown): value is String => {
  return typeof value === 'string';
};
