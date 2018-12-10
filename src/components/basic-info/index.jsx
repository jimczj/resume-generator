import React from 'react'
import { Rate, Progress, Avatar } from 'antd'
import classNames from 'classnames'

import './index.scss'

export default class BasicInfo extends React.Component {
  render () {
    const dataSource = this.props.dataSource
    console.log(dataSource.children)
    return (
      <div className='basic-info__container'>
        <div className='basic-info__title'>
          {dataSource.content}
        </div>
        <div
          className='basic-info__list'
          style={
            dataSource.listStyleType
              ? {
                listStyleType: dataSource.listStyleType,
                listStyle: dataSource.listStyleType
              }
              : {}
          }
        >
          {
            dataSource.children && dataSource.children.map((item, i) => (
              <div
                className={
                  classNames(
                    'basic-info__item'
                  )
                }
                key={i}
              >
                <li></li>
                {
                  item.avatar
                    ? <Avatar shape={item.avatar} size={150} src={item.src} />
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
