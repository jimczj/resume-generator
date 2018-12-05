import React from 'react'

import './index.scss'
import dataSource from '../../../data.js'
import BasicInfo from '../../components/basic-info/index.jsx'

export default class Index extends React.Component {
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
