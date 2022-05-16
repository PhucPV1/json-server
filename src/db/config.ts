import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'sql6.freemysqlhosting.net',
  port: 3306,
  username: 'sql6491265',
  password: 'aJlSUL9ZCp',
  database: 'sql6491265',
  entities: ['dist/db/entities/*.entity{.ts,.js}'],
  synchronize: true,
});
