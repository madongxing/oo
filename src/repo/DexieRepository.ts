import Dexie, { type Table } from 'dexie';
import type { Repository } from './Repository';
import { type StoredRecord, matchesFilter } from './match';
import { assertGenericTable } from './tables';

class XuyinDB extends Dexie {
  assets!: Table<StoredRecord, string>;
  registry!: Table<StoredRecord, string>;
  projects!: Table<StoredRecord, string>;

  constructor() {
    super('xuyin');
    this.version(1).stores({
      assets: 'id',
      registry: 'id',
      projects: 'id',
    });
  }
}

export class DexieRepository implements Repository {
  private db = new XuyinDB();

  async save<T>(table: string, entity: T): Promise<string> {
    assertGenericTable(table);
    const record = entity as Partial<StoredRecord>;
    const id = record.id ?? crypto.randomUUID();
    await this.db.table<StoredRecord, string>(table).put({ ...record, id });
    return id;
  }

  async get<T>(table: string, id: string): Promise<T | null> {
    assertGenericTable(table);
    const record = await this.db.table<StoredRecord, string>(table).get(id);
    return (record as T | undefined) ?? null;
  }

  async query<T>(table: string, filter: object): Promise<T[]> {
    assertGenericTable(table);
    const all = await this.db.table<StoredRecord, string>(table).toArray();
    return all.filter((record) => matchesFilter(record, filter)) as T[];
  }

  async list<T>(table: string, scope?: object): Promise<T[]> {
    assertGenericTable(table);
    const all = await this.db.table<StoredRecord, string>(table).toArray();
    return (scope ? all.filter((record) => matchesFilter(record, scope)) : all) as T[];
  }

  async delete(table: string, id: string): Promise<void> {
    assertGenericTable(table);
    await this.db.table<StoredRecord, string>(table).delete(id);
  }
}
