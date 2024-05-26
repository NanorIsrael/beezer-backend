export const connection: Connection = {
  CONNECTION_STRING: 'MYSQL://localhost:3264',
  DB: 'MYSQL',
  DB_NAME: 'TEST',
};

export interface Connection {
  CONNECTION_STRING: string;
  DB: string;
  DB_NAME: string;
}
