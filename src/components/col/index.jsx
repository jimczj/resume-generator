import React from 'react'

import './index.scss'

export default class Col extends React.Component {
  render () {
    return <div style={this.props.style} className={`col-${this.props.span}`}>
      {this.props.children}
    </div>
  }
}
