import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import sequelizeConfig from './config/ormconfig';

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig), UserModule],
})
export class AppModule {}