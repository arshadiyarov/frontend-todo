import { Timestamps } from "../../../shared/api/model/api";

export interface UserEntity extends Timestamps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
