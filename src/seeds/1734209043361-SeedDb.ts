import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1734209043361 implements MigrationInterface {
  name = 'SeedDb1734209043361';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags(name) VALUES ('dragons'), ('coffee'), ('nestjs'),`,
    );
  }
}
