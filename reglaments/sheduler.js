import cron from 'node-cron'

function sheduler() {
    cron.schedule('0 */15 * * * *', () => {
        console.log(Date.now())
    })
}

export default sheduler