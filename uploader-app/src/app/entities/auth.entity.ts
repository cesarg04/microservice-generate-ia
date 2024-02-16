import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Resource } from "./report.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(
        () => Resource,
        (resource) => resource.user,
        {
            onDelete: 'CASCADE'
        }
    )
    resource: Resource[]

    @BeforeInsert()
    checkLowerInsert(){
        this.email = this.email.toLowerCase().trim()
    }
}