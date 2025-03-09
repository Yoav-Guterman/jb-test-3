import {
    AllowNull,
    Column,
    DataType,
    Default,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Meeting from "./meeting";

@Table({
    underscored: true,
})
export default class Team extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column
    name: string

    @HasMany(() => Meeting)
    meetings: Meeting[]
}
