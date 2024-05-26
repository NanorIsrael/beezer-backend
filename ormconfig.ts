import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entity/**/*.ts'],
  migrations: [__dirname + '/migration/**/*.ts'],
  subscribers: [__dirname + '/subscriber/**/*.ts'],
});
