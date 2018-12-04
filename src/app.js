import Nerv from 'nervjs'

import Index from './pages/index/index'

import './index.scss'

class App extends Nerv.Component {
  render () {
    return (
      <Index/>
    )
  }
}

export default App
