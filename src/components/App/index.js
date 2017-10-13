import Chart from '../Chart'
import Book from '../Book'
import Trades from '../Trades'

import s from './styles.scss'

export default function App({ book, trades }) {
  return (
    <div>
      {/* <Chart data={[]} /> */}
      <Book data={book} />
      <Trades data={trades} />
    </div>
  )
}
