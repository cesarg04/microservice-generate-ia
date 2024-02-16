import { AfterInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./auth.entity";

export enum Status {
    PENDING = 'pending',
    SUCCESS = 'success',
    FAIL = 'fail'
}

@Entity()
export class Resource {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    url?: string;

    @Column({ default: Status.PENDING })
    status: Status;

    @ManyToOne(
        () => User,
        (user) => user.resource
    )
    user: User

    @AfterInsert()
    async updateStatus() {
        if (this.url && this.status === Status.PENDING) {
            this.status = Status.SUCCESS;
        }
    }
}
