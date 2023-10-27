import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StrayDog {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('timestamp without time zone')
    reportDate: Date;

    @Column('text')
    address: string;

    @Column('text', { nullable: true })
    photoUrl: string;

    @Column('text', { nullable: true })
    description: string;

    @Column('boolean', { default: false })
    isActive: boolean


    @Column({
        type: "enum",
        enum: ["male", "female", "unknow"],
        default: "unknow"
    })
    gender: string
}
