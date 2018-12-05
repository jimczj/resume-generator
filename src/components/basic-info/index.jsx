import React from 'react'
import './index.scss'

export default class BasicInfo extends React.Component {
  render () {
    const dataSource = this.props.dataSource

    return (
      <div className='basic-info__container'>
        <div className='basic-info__title'>
          {dataSource.title}
        </div>
        <ul className='basic-info__list'>
          {
            dataSource.data.map(item => (
              <li
                className='basic-info__item'
                key={item.label}>
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
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
