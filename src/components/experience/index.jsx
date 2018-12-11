import React from 'react'
import { Icon } from 'antd'

import './index.scss'

export default class Experience extends React.Component {
  render () {
    const {
      content,
      iconType,
      children,
      underlineColor
    } = this.props.dataSource

    const underlineStyle = {
      borderColor: underlineColor
    }
    if (underlineColor === 'none') {
      underlineStyle.borderBottom = 'none'
    }

    return (
      <div className='experience__container'>
        {
          content ? <div className='experience__title' style={underlineStyle}>
            <Icon style={{ marginRight: 10 }} type={iconType} />
            {content}
          </div>
            : null
        }
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
