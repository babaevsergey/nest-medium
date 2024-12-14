import { UserEntity } from '@app/user/user.entity';

export interface ExpressRequestInterface extends Request {
  user?: UserEntity;
}
