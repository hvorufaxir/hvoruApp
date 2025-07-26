import { hasProperty, isObject } from '@hvoruapp/utils';
import { cloneDeep } from 'lodash';

type VersionedData = {
  meta: { version: number };
  data: Record<string, unknown>;
};
export const version = 120.5;
export async function migrate(originalVersionedData: VersionedData): Promise<VersionedData> {return originalVersionedData}
