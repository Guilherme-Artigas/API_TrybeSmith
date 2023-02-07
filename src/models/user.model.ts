import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  private connection : Pool;

  constructor(connectionE : Pool) {
    this.connection = connectionE;
  }

  public async createUser(user : IUser) : Promise<IUser> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return { id: insertId, ...user };
  }
}