import { That } from './that';

export interface Tag {
  id: string;
  name: string // unique
  thats: That[]
  // TODO related tags
  // TODO popularity
}
