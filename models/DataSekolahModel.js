import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const DataSekolah = db.define('datasekolah', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    nameScholl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    npsn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false,
        }
    },
    pengelolaan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false,
        }
    },
    tingkatan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false, 
            len : true,
        }
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false, 
            len : true,
        }
    },
    noHp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    nameKs: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false, 
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
}, {
    freezeTableName: true
});

Users.hasMany(DataSekolah);
DataSekolah.belongsTo(Users, { foreignKey: 'userId' });

export default DataSekolah;