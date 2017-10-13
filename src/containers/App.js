import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from 'components/App'
import initWs from 'utils/ws'

require('styles/marx.scss')

@connect(state => ({ book: state.book, trades: state.trades, ticker: state.ticker }))
export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    // props.loadAuth()
    initWs(props.dispatch)
  }

  render() {
    const { book, trades } = this.props

    return (
      <App book={book} trades={trades} />
    )
  }
}
