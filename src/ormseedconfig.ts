import ormConfig from '@app/ormconfig';

const ormSeedConfig = {
  ...ormConfig,
  migrations: [__dirname + '**/*/src/seeds/*.ts'],
};

export default ormSeedConfig;
