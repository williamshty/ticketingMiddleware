const {TicketingInfo} = require('../models')
var tickets = require('../ticketInsertion.json')
module.exports = {
    insertTicket () {
        for (let ticket of tickets) {
            var insertTicket = {
                'submissionID': parseInt(ticket.submissionId),
                'name': ticket.name.toString(),
                'showTime': ticket.showTime.toString(),
                'numberOfTix': parseInt(ticket.numberOfTix)
            }
            // console.log(insertTicket)
            TicketingInfo.create(insertTicket)
        }
    }
}
