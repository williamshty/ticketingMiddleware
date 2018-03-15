const { TicketingInfo } = require('../models')
const {sequelize} = require('../models')
const Op = sequelize.Op

module.exports = {
  async updateTicket (req, res) {
    try {
      console.log(req.body.submissionID)
      TicketingInfo.update(
        { redeemedTix: req.body.redeemedTix },
        { returning: true, where: { submissionID: parseInt(req.body.submissionID) } }
      ).then(async function () {
        const ticket = await TicketingInfo.findAll({where: {
            submissionID: parseInt(req.body.submissionID)
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
  async getUpdatedTickets (res) {
    try {
      const tickets = TicketingInfo.findAll(
        {
          where: {
            redeemedTix: {
              [Op.gt]: 0
            }
          }
        }
      )
      console.log(tickets)
      res.send(tickets)
    } catch (err) {
      // console.log(req.query.submissionID)
      res.status(400).send({
        error: 'Failed to Find Ticket'
      })
    }
  }
}
