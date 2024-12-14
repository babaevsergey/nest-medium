import { Module } from '@nestjs/common';
import { ArticleController } from '@app/article/article.controller';
import { ArticleService } from '@app/article/article.service';

@Module({
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
