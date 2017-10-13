import ReactDOM from 'react-dom'
import createStore from 'redux/create'
import { Provider } from 'react-redux'
import AppContainer from 'containers/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const store = createStore()

ReactDOM.render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
