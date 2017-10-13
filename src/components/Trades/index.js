import s from './styles.scss'

export default function Trades({ data }) {
  return (
    <div>
      <h2>BTC trades</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <td />
            <td>Amount</td>
            <td>Price (USD)</td>
          </tr>
        </thead>
        <tbody>
          { data.map(({ id, mts, amount, price }) => (
            <tr key={id}>
              <td style={{ backgroundColor: (amount < 0 ? '#6C302F' : '#63793A')} } />
              <td>{Math.abs(amount)}</td>
              <td>{price}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}
