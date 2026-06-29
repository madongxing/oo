import type { Repository } from './Repository';
import { DexieRepository } from './DexieRepository';

export const repo: Repository = new DexieRepository();
export type { Repository } from './Repository';
