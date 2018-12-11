import React from 'react'
import { Icon } from 'antd'

import './index.scss'

export default class ElementTitle extends React.Component {
  render () {
    const {
      content,
      iconType,
      underlineColor,
      headerColor
    } = this.props

    const titleStyle = {
      borderColor: underlineColor,
      backgroundColor: headerColor
    }
    if (underlineColor === 'none') {
      titleStyle.borderBottom = 'none'
    }
    console.log(this.props)
    return <div className='element-title'>
      {
        content
          ? <div className='element-title__content' style={titleStyle}>
            {
              iconType
                ? <Icon className='element-title__icon' type={iconType} />
                : null
            }
            {content}
          </div>
          : null
      }
    </div>
  }
}
