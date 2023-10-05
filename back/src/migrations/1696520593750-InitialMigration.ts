import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696520593750 implements MigrationInterface {
    name = 'InitialMigration1696520593750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "cep" character varying(8) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(50) NOT NULL, "street" character varying(70) NOT NULL, "number" character varying(6), "complement" character varying(200), "userId" integer, CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "comment" character varying(500) NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(15) NOT NULL, "dateBirth" date NOT NULL, "description" character varying(150), "isAdvertiser" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "image" character varying(500) NOT NULL, "anouncementId" integer, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "anouncements" ("id" SERIAL NOT NULL, "brand" character varying(20) NOT NULL, "model" character varying(50) NOT NULL, "year" integer NOT NULL, "fuel" character varying(20) NOT NULL, "mileage" numeric(10,2) NOT NULL DEFAULT '0', "color" character varying(20) NOT NULL, "fipePrice" numeric(10,2) NOT NULL DEFAULT '0', "price" numeric(10,2) NOT NULL DEFAULT '0', "description" character varying(150), "userId" integer, CONSTRAINT "PK_c96a8cc85ae35a5f59b0eb0d272" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments_user_users" ("commentsId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_e7f2536748320964d8cdaf6dbc6" PRIMARY KEY ("commentsId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb7952afbdd6dd368d29c633c0" ON "comments_user_users" ("commentsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_448034293a835cc1833faab0ca" ON "comments_user_users" ("usersId") `);
        await queryRunner.query(`CREATE TABLE "comments_anouncement_anouncements" ("commentsId" integer NOT NULL, "anouncementsId" integer NOT NULL, CONSTRAINT "PK_2f2d7fd89b26095165f90fb9c5e" PRIMARY KEY ("commentsId", "anouncementsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3f694041c0e6400bfbcd75de91" ON "comments_anouncement_anouncements" ("commentsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_01a9acbd597d1ebcba52d8502b" ON "comments_anouncement_anouncements" ("anouncementsId") `);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_019275b0b62c3f8b98e66c6d79c" FOREIGN KEY ("anouncementId") REFERENCES "anouncements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anouncements" ADD CONSTRAINT "FK_e267ed4442b36dddaff4b9f1986" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments_user_users" ADD CONSTRAINT "FK_cb7952afbdd6dd368d29c633c0a" FOREIGN KEY ("commentsId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments_user_users" ADD CONSTRAINT "FK_448034293a835cc1833faab0ca0" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments_anouncement_anouncements" ADD CONSTRAINT "FK_3f694041c0e6400bfbcd75de91e" FOREIGN KEY ("commentsId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments_anouncement_anouncements" ADD CONSTRAINT "FK_01a9acbd597d1ebcba52d8502b2" FOREIGN KEY ("anouncementsId") REFERENCES "anouncements"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments_anouncement_anouncements" DROP CONSTRAINT "FK_01a9acbd597d1ebcba52d8502b2"`);
        await queryRunner.query(`ALTER TABLE "comments_anouncement_anouncements" DROP CONSTRAINT "FK_3f694041c0e6400bfbcd75de91e"`);
        await queryRunner.query(`ALTER TABLE "comments_user_users" DROP CONSTRAINT "FK_448034293a835cc1833faab0ca0"`);
        await queryRunner.query(`ALTER TABLE "comments_user_users" DROP CONSTRAINT "FK_cb7952afbdd6dd368d29c633c0a"`);
        await queryRunner.query(`ALTER TABLE "anouncements" DROP CONSTRAINT "FK_e267ed4442b36dddaff4b9f1986"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_019275b0b62c3f8b98e66c6d79c"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_01a9acbd597d1ebcba52d8502b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3f694041c0e6400bfbcd75de91"`);
        await queryRunner.query(`DROP TABLE "comments_anouncement_anouncements"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_448034293a835cc1833faab0ca"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cb7952afbdd6dd368d29c633c0"`);
        await queryRunner.query(`DROP TABLE "comments_user_users"`);
        await queryRunner.query(`DROP TABLE "anouncements"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
