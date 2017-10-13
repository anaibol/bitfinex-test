const TRADE_EXECUTED = 'trades/TRADE_EXECUTED'
const TRADE_UPDATED = 'trades/TRADE_UPDATED'

export default (state = [], action = {}) => {
  let id, mts, amount, price

  switch (action.type) {
    case TRADE_EXECUTED:
      [
        id,
        mts,
        amount,
        price
      ] = action.data

      return [...state, {
        id,
        mts,
        amount,
        price
      }].slice(-10)

    case TRADE_UPDATED:
      [
        id,
        mts,
        amount,
        price
      ] = action.data

      return state.map(trade => {
        if (trade.id === id) {
          return {
            id,
            mts,
            amount,
            price
          }
        } else {
          return trade
        }
      })

    default:
      return state
  }
}

export function tradeExecuted(data) {
  return {
    type: TRADE_EXECUTED,
    data
  }
}

export function tradeUpdated(data) {
  return {
    type: TRADE_UPDATED,
    data
  }
}
