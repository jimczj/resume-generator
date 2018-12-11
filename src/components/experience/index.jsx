import React from 'react'
import ElementTitle from '../element-title/index.jsx'

import './index.scss'

export default class Experience extends React.Component {
  render () {
    const { children } = this.props.dataSource

    return (
      <div className='experience__container'>
        <ElementTitle {...this.props.dataSource} />
        <ul className='experience__list'>
          {
            children.map(item => (
              <li key={item.label}>
                <div className="circle"></div>
                <h4>{item.label}</h4>
                <div>{item.content}</div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
