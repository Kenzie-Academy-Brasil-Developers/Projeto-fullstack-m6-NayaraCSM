import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import User from "./User.entity";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 8 })
  cep: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 70 })
  street: string;

  @Column({ type: "varchar", length: 6, nullable: true })
  number?: string | undefined | null;

  @Column({ type: "varchar", length: 200, nullable: true })
  complement?: string | undefined | null;

  @OneToOne(() => User, (user) => user.address, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;
}

export default Address;
