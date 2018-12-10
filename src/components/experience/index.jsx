import React from 'react'
import { Icon } from 'antd'

import './index.scss'

export default class Experience extends React.Component {
  render () {
    const {
      content,
      iconType,
      children
    } = this.props.dataSource

    return (
      <div className='experience__container'>
        <div className='experience__title'>
          {
            content ? <div className='element-node__title'>
              <Icon style={{ marginRight: 10 }} type={iconType} />
              {content}
            </div>
              : null
          }
        </div>
        <ul className='experience__list'>
          {children.map(item => (
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
