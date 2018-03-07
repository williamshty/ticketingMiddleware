
const TicketingController = require('./controllers/TicketingController')
module.exports = (app) => {
    app.get('/getTicket',
        TicketingController.checkTicket)
}
