import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import auth from '../auth/validateJWT';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<string> {
    const newUser = await this.model.create(user);
    return auth(newUser);
  }
}

export default UserService;