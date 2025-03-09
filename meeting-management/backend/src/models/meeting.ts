import {
    AllowNull,
    BelongsTo,
    Column,
    DataType,
    Default,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Team from "./team";

@Table({
    underscored: true,
})
export default class Meeting extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Team)
    @AllowNull(false)
    @Column(DataType.UUID)
    teamId: string

    @AllowNull(false)
    @Column
    description: string

    @AllowNull(false)
    @Column(DataType.STRING(40))
    room: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startTime: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    endTime: Date

    @BelongsTo(() => Team)
    team: Team
}