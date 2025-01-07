import { dataSourceOptions } from '@app/ormconfig';

const ormSeedConfig = {
  ...dataSourceOptions,
  migrations: ['src/seeds/*.ts'],
};

export default ormSeedConfig;
