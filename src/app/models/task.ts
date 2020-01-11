import { User } from './user';
import { TASk_STATUS } from './taskstatus';

export interface Task {
  name: string;
  description: string;
  // createdAt: Date;
  dueDate: Date;
  // actualCompletionDate: Date;
  status: TASk_STATUS;
  assignedTo: User;
}
