import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./User.entity";
import Anouncement from "./Anouncement.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 500 })
  comment: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.comment, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Anouncement, (anouncement) => anouncement.comment, { onDelete: "CASCADE" })
  anouncement: Anouncement;
}

export default Comment;
