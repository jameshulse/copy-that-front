import { Permission } from './permission';
import { That } from './that';

export interface User {
  id: string;
  username: string;
  email: string;
  permissions: Permission[];
  thats: That[];
  // comments [Comment]
}
