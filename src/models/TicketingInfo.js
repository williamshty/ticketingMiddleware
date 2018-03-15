module.exports = (sequelize, DataTypes) => {
    const TicketingInfo = sequelize.define('TicketingInfo', {
        name: DataTypes.STRING,
        showTime: DataTypes.STRING,
        numberOfTix: DataTypes.INTEGER,
        submissionID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        redeemedTix: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        // timestamps: false
    })
    return TicketingInfo
}
