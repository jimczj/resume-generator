import React from 'react'

import { Rate, Progress, Avatar, Icon } from 'antd'
import classNames from 'classnames'
import ElementTitle from '../element-title/index.jsx'

import './index.scss'

export default class BasicInfo extends React.Component {
  render () {
    const {
      listStyleType,
      children,
    } = this.props.dataSource

    return (
      <div
        className='basic-info__container'
        style={this.props.style}
      >
        <ElementTitle {...this.props.dataSource} />
        <div
          className='basic-info__list'
          style={
            listStyleType
              ? {
                listStyleType,
                listStyle: listStyleType
              }
              : {}
          }
        >
          {
            children && children.map((item, i) => (
              <div
                className={
                  classNames(
                    'basic-info__item',
                    `basic-info__item--col-${item.width}`
                  )
                }
                key={i}
              >
                <li></li>
                {
                  item.iconType
                    ? <Icon style={{ marginRight: 10 }} type={item.iconType} />
                    : null
                }
                {
                  item.avatar
                    ? <Avatar shape={item.avatar} size={parseInt(item.size) || 150} src={item.src} />
                    : null
                }
                {
                  item.label
                    ? <label className='basic-info__label'>
                      {item.label}:
                    </label>
                    : null
                }
                {
                  item.content && item.content.startsWith('http')
                    ? <a
                      style={this.props.style}
                      className='basic-info__info basic-info__link'
                      href={item.content}>
                      {item.content}
                    </a>
                    : <span className='basic-info__info basic-info__text'>{item.content}</span>
                }
                {
                  item.rate
                    ? <Rate allowHalf disabled defaultValue={parseFloat(item.rate)} />
                    : null
                }
                {
                  item.percent
                    ? <div className='basic-info__progress-box'>
                      <Progress
                        percent={parseFloat(item.percent)}
                        showInfo={false}
                      />
                    </div>
                    : null
                }
                {
                  item.circlePercent
                    ? <Progress type="circle" width={50} percent={parseFloat(item.circlePercent)} />
                    : null
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
