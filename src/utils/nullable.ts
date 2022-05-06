export type Nullable<T> = T | null;

export function isNull(value: unknown): boolean {
  return value === null;
}

export function isNotNull(value: unknown): boolean {
  return !isNull(value);
}
