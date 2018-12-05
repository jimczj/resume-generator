import Nerv from 'nervjs'

import './index.scss'
import dataSource from '../../../data.js'
import BasicInfo from '../../components/basic-info'

export default class Index extends Nerv.Component {
  render () {
    return (
      <div className='container'>
        {
          dataSource.data.map(item => (
            <BasicInfo
              key={item.title}
              dataSource={item}
            />
          ))
        }
      </div>
    )
  }
}
