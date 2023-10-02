import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from "typeorm";
import User from "./User.entity";
import Comment from "./Comment.entity";
import Image from "./Image.entity";

@Entity("anouncements")
class Anouncement {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 20 })
  brand: string;

  @Column({ length: 50 })
  model: string;

  @Column({ type: "integer" })
  year: number;

  @Column({ length: 20 })
  fuel: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  mileage: number | string;

  @Column({ length: 20 })
  color: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  fipePrice: number | string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  price: number | string;

  @Column({ type: "varchar", length: 150, nullable: true })
  description?: string | undefined | null;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Comment, (comments) => comments.anouncement)
  comment: Comment;

  @OneToMany(() => Image, (images) => images.anouncement)
  image: Image;
}

export default Anouncement;
