const {TicketingInfo} = require('../models')

module.exports = {
    async checkTicket (req, res) {
        try {
            console.log(req.query.submissionID)
            const ticket = await TicketingInfo.findAll({where: {
                submissionID: parseInt(req.query.submissionID)
            }})
            console.log(ticket)
            res.send(ticket)
        } catch (err) {
            // console.log(req.query.submissionID)
            res.status(400).send({
                error: 'Failed to Find Ticket'
            })
        }
    },
    async dumpData () {
    }
}
