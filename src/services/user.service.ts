import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import createTokenJWT from '../utils/token.generate';

export default class UserService {
  private model : UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async login(username: string, password: string) {
    const userFound = await this.model.login(username, password);
    if (!userFound) return { message: 'Username or password invalid' };
    const { id } = userFound;
    const token = createTokenJWT({ id, username });
    return token;
  }

  public async createUser(user : IUser) : Promise<string> {
    const newUser = await this.model.createUser(user);
    const token = createTokenJWT(newUser);
    return token;
  }
}