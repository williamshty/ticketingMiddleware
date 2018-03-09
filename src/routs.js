const TicketUpdateController = require('./controllers/TicketUpdateController')
const TicketingController = require('./controllers/TicketingController')
module.exports = (app) => {
    app.get('/getTicket',
        TicketingController.checkTicket)
    app.put('/updateTicket',
        TicketUpdateController.updateTicket)
}
