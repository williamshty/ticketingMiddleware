const TicketUpdateController = require('./controllers/TicketUpdateController')
const TicketingController = require('./controllers/TicketingController')
const TicketingInsertionController = require('./controllers/TicketingInsertionController')
module.exports = (app) => {
    app.get('/getTicket',
        TicketingController.checkTicket)
    app.put('/updateTicket',
        TicketUpdateController.updateTicket)
    app.post('/insert', TicketingInsertionController.insertTicket)
}
