import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Meeting from "../models/meeting";
import Team from "../models/team";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [Team, Meeting],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize