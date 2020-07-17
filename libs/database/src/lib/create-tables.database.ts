import { User } from '@crud/user/utilities/sql-models';

export const CreateTables = async () => {
  await User.sync();
}