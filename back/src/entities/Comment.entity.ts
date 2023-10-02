import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";
import User from "./User.entity";
import Anouncement from "./Anouncement.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 500 })
  comment: string;

  @ManyToMany(() => User)
  @JoinTable()
  user: User;

  @ManyToMany(() => Anouncement)
  @JoinTable()
  anouncement: Anouncement;
}

export default Comment;
