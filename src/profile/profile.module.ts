import { Module } from '@nestjs/common';
import { ProfileController } from '@app/profile/profile.controller';
import { ProfileService } from '@app/profile/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@app/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
