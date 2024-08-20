import { SequelizeModuleOptions } from '@nestjs/sequelize';

const config: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: 'database.sqlite',
  autoLoadModels: true,
  synchronize: true,
};

export default config;