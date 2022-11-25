import { timestamp } from "rxjs";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UpdateItemDto } from "../dto/update-item.dto";

@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @UpdateDateColumn({
        name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;

    @Column({ name: 'name', type: 'varchar',length: 255 })
    name?: string;

    @Column({ name: 'description', type: 'varchar', nullable: true, length: 255 })
    description?: string;

    @Column({ name: 'quanlity', type: 'int' })
    quantily: number;
}