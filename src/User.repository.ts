import Database, { UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  public db = Database
  public async createUser(data: UserRequestDto) {
    const user = await this.db.create(data)
    return user
  }
}
