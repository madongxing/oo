import type { Repository } from './Repository';
import { type StoredRecord, matchesFilter } from './match';
import { assertGenericTable } from './tables';

export class MapRepository implements Repository {
  private tables = new Map<string, Map<string, StoredRecord>>();

  private getTable(table: string): Map<string, StoredRecord> {
    let t = this.tables.get(table);
    if (!t) {
      t = new Map();
      this.tables.set(table, t);
    }
    return t;
  }

  async save<T>(table: string, entity: T): Promise<string> {
    assertGenericTable(table);
    const record = entity as Partial<StoredRecord>;
    const id = record.id ?? crypto.randomUUID();
    this.getTable(table).set(id, { ...record, id });
    return id;
  }

  async get<T>(table: string, id: string): Promise<T | null> {
    assertGenericTable(table);
    return (this.getTable(table).get(id) as T | undefined) ?? null;
  }

  async query<T>(table: string, filter: object): Promise<T[]> {
    assertGenericTable(table);
    return Array.from(this.getTable(table).values()).filter((record) =>
      matchesFilter(record, filter),
    ) as T[];
  }

  async list<T>(table: string, scope?: object): Promise<T[]> {
    assertGenericTable(table);
    const all = Array.from(this.getTable(table).values());
    return (scope ? all.filter((record) => matchesFilter(record, scope)) : all) as T[];
  }

  async delete(table: string, id: string): Promise<void> {
    assertGenericTable(table);
    this.getTable(table).delete(id);
  }
}
