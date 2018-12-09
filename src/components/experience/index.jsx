import React from 'react'

import './index.scss'

export default class Experience extends React.Component {
  render () {
    const dataSource = this.props.dataSource

    return (
      <div className='experience__container'>
        <div className='experience__title'>
          {dataSource.title}
        </div>
        <ul className='experience__list'>
          {dataSource.children.map(item => (
            <li key={item.label}>
              <div className="circle"></div>
              <h4>{item.label}</h4>
              <div>{item.info}</div>
            </li>
          ))
          }
        </ul>
      </div>
    )
  }
}
