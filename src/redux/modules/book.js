const BOOK_ORDER_EXECUTED = 'book/BOOK_ORDER_EXECUTED'

export default (state = [], action = {}) => {
  switch (action.type) {
    case BOOK_ORDER_EXECUTED:
      const [
        price,
        count,
        amount
      ] = action.data

      return [...state, {
        price,
        count,
        amount
      }].slice(10)

    default:
      return state
  }
}

export function bookOrderExecuted(data) {
  return {
    type: BOOK_ORDER_EXECUTED,
    data
  }
}
