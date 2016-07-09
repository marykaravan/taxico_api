module.exports = function( sequelize, DataTypes ){
    var Schedule = sequelize.define( 'Schedule',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true
            },
            start_day: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            end_day: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            vehicle_plate_number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            driver_id: {
                type: DataTypes.UUID,
                allowNull: true
            },
            vehicle_id: {
                type: DataTypes.UUID,
                allowNull: true
            },
            driver_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'schedules',
            associate: function( models ){
                Schedule.hasMany( models.Vehicle );
                Schedule.hasMany( models.Driver );
            }
        } );
    return Schedule;
};


// tableName: 'schedules',
//     associate
// :
// function( models ){
//     Schedule.hasMany( models.Vehicle );
//     Schedule.hasMany( models.Driver );
// }