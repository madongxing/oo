export interface Migration {
  version: number;
  upgrade: () => Promise<void> | void;
}

export const CURRENT_SCHEMA_VERSION = 1;

export const migrations: Migration[] = [];
