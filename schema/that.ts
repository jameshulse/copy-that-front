import { User } from './user';
import { Tag } from './tag';
import { Skill } from './skill';
import { Difficulty } from './difficulty';

export interface That {
  id: string;
  title: string;
  description: string;
  source: string;
  image: string
  largeImage: string;
  user: User;
  tags: Tag[];
  skills: Skill[];
  difficulty: Difficulty;
}
