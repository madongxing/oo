export interface StoredRecord {
  id: string;
  [key: string]: unknown;
}

export function matchesFilter(record: StoredRecord, filter: object): boolean {
  return Object.entries(filter).every(([key, value]) => record[key] === value);
}
