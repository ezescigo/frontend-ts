import { User } from "models/user/user";

export interface UserState {
  currentUser: User | null;
}