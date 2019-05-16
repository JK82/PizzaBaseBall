const {DAYS} = require('./constants')

const utils = {
    getDayOfWeek: (dateString) => {
        //05/23/2014
        const date = new Date(dateString)
        return DAYS[date.getDay()]
    },
    getTodaysDate: () => {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        const yyyy = today.getFullYear()

        return mm + '/' + dd + '/' + yyyy
    },
    getYesterdaysDate: () => {
        const today = new Date()
        const dd = String(today.getDate() - 1).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        const yyyy = today.getFullYear()

        return mm + '/' + dd + '/' + yyyy
    },
}

module.exports = utils
