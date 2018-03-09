const { TicketingInfo } = require('../models')

module.exports = {
  async updateTicket (req, res) {
    try {
      TicketingInfo.update(
        { redeemedTix: req.body.redeemedTix },
        { returning: true, where: { submissionID: parseInt(req.query.submissionID) } }
      ).then(async function () {
        const ticket = await TicketingInfo.findAll({where: {
            submissionID: parseInt(req.query.submissionID)
        }})
        console.log(ticket)
        res.send(ticket)
      }
      )
      .catch()
    } catch (err) {
      // console.log(req.query.submissionID)
      res.status(400).send({
        error: 'Failed to Find Ticket'
      })
    }
  },
  async dumpData () {}
}
