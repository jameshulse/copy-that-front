import { That } from './that';

export interface Skill {
  id: string;
  name: string;
  thats: That[];
  // TODO related skills
  // TODO popularity
}
