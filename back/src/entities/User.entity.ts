import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Address from "./Address.entity";
import Anouncement from "./Anouncement.entity";
import Comment from "./Comment.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 15, unique: true })
  phone: string;

  @Column({ type: "date" })
  dateBirth: string;

  @Column({ type: "varchar", length: 150, nullable: true })
  description?: string | undefined | null;

  @Column({ default: false })
  isAdvertiser: boolean;

  @OneToOne(() => Address, (address) => address.user, { onDelete: "CASCADE" })
  address: Address;

  @OneToMany(() => Anouncement, (anouncements) => anouncements.user)
  anouncement: Anouncement;

  @ManyToMany(() => Comment, (comments) => comments.user)
  comment: Comment;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
