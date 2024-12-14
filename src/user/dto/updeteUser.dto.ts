import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  readonly email: string;
  readonly bio: string;
  readonly image: string;
}
