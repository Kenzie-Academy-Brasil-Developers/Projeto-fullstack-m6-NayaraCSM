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

  @Column({ type: "integer" })
  cep: number;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 70 })
  street: string;

  @Column({ type: "integer", nullable: true })
  number?: number | undefined | null;

  @Column({ type: "varchar", length: 200, nullable: true })
  complement?: string | undefined | null;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Address;
