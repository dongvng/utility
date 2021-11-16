export function sumByFn<T>(array: T[], fn: (i: T) => number) {
  return array.reduce((a, b) => a + fn(b), 0);
}

export function sortDesc<T>(array: T[], key: keyof T) {
  return array.sort((a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  });
}

export function sortAsc<T>(array: T[], key: keyof T) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}
