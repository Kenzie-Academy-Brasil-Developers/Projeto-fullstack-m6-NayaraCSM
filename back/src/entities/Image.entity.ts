import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Anouncement from "./Anouncement.entity";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 500 })
  image: string;

  @ManyToOne(() => Anouncement, (anouncement) => anouncement.image, {
    onDelete: "CASCADE",
  })
  anouncement: Anouncement;
}

export default Image;
