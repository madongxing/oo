export interface Repository {
  save<T>(table: string, entity: T): Promise<string>;
  get<T>(table: string, id: string): Promise<T | null>;
  query<T>(table: string, filter: object): Promise<T[]>;
  list<T>(table: string, scope?: object): Promise<T[]>;
  delete(table: string, id: string): Promise<void>;
}
