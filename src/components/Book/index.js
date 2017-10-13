import s from './styles.scss'

export default function Book({ data }) {
  return (
    <div>
      <h1>BTC order book</h1>
      <table className={s.table}>
        <thead>
          <tr>
            <td></td>
            <td>Amount</td>
            <td>Count</td>
            <td>Price (USD)</td>
          </tr>
        </thead>
        <tbody>
          { data.map(({ price, count, amount }, i) => (
            <tr key={i}>
              <td style={{ backgroundColor: (amount < 0 ? '#6C302F' : '#63793A')} } />
              <td>{Math.abs(amount)}</td>
              <td>{count}</td>
              <td>{price}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}
