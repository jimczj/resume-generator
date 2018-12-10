import React from 'react'
import classNames from 'classnames'

import './index.scss'

export default class Row extends React.Component {
  render () {
    const { children } = this.props
    let isFlex = true
    React.Children.map(children, child => {
      isFlex = child && child.props.span && child.props.span !== 24
    })

    return <div
      className={
        classNames(
          this.props.className,
          'row',
          {
            'row--block': !isFlex
          })
      }>
      {this.props.children}
    </div>
  }
}
