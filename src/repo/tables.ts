export const GENERIC_TABLES = ['assets', 'registry', 'projects'] as const;

export type GenericTable = (typeof GENERIC_TABLES)[number];

export function assertGenericTable(table: string): void {
  if (!GENERIC_TABLES.includes(table as GenericTable)) {
    throw new Error(
      `未知表 "${table}"——铁律2 只允许通用表 ${GENERIC_TABLES.join('/')}，不为模块建专属表`,
    );
  }
}
