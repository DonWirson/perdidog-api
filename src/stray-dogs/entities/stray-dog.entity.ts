import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class StrayDog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reportDate: Date;

    @Column()
    address: string;

    @Column()
    photoUrl: string;

    @Column({ length: 100 })
    description: string;

    @Column({ default: false })
    isActive: boolean
}
