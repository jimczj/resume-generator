import React from 'react'
import { Rate, Progress, Avatar } from 'antd'
import classNames from 'classnames'

import './index.scss'

export default class BasicInfo extends React.Component {
  render () {
    const dataSource = this.props.dataSource

    return (
      <div className='basic-info__container'>
        <div className='basic-info__title'>
          {dataSource.title}
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
            dataSource.data.map(item => (
              <div
                className={
                  classNames(
                    'basic-info__item',
                    `basic-info__item--col-${dataSource.col}`
                  )
                }
                key={
                  item.label
                    ? item.label
                    : item.src
                }
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
                  item.info && item.info.startsWith('http')
                    ? <a
                      className='basic-info__info basic-info__link'
                      href={item.info}>
                      {item.info}
                    </a>
                    : <span className='basic-info__info basic-info__text'>{item.info}</span>
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
