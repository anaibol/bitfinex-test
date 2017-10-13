import config from 'config'
import { bookOrderExecuted } from '../redux/modules/book'
import { tradeExecuted, tradeUpdated } from '../redux/modules/trades'

export default (dispatch) => new Promise(async (resolve, reject) => {
  const ws = new WebSocket(config.bitfinex.websocketPath)

  ws.onopen = () => {
    ws.send(JSON.stringify({
      event: 'subscribe',
      channel: 'book',
      symbol: 'tBTCUSD'
    }))

    ws.send(JSON.stringify({
      event: 'subscribe',
      channel: 'trades',
      symbol: 'tBTCUSD'
    }))

    let channels = {
      book: null,
      trades: null
    }

    ws.onmessage = msg => {
      const response = JSON.parse(msg.data);

      if (response.event === "info") return resolve()

      if (response.event === "subscribed") {
        const { channel, chanId } = response
        channels[response.channel] = chanId

        return
      }

      const channelId = response[0]

      if (channelId === channels.book) {
        const data = response[1]

        dispatch(bookOrderExecuted(data))
      } else if (channelId === channels.trades) {
        const event = response[1]
        const data = response[2]

        if (event === 'te') {
          dispatch(tradeExecuted(data))
        } else if (event === 'tu') {
          dispatch(tradeUpdated(data))
        }
      }
    }
  }



  // if (window.socket) return resolve()

  // window.socket = io
  //   .connect('wss://api.bitfinex.com/ws/2')
  //   .on('connect', () => {
  //     console.log('ws connected')
  //     resolve()
  //   })
  //   .on('action', dispatch)
})
