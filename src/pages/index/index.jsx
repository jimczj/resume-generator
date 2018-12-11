import React from 'react'
import classNames from 'classnames'
import { Button, Icon } from 'antd'

import './index.scss'
import dataSource from '../../../data.js'
import ElementNode from '../../components/element-node/index.jsx'

export default class Index extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      isShowBtn: true
    }
  }

  handlePrint = () => {
    this.setState({
      isShowBtn: false
    }, () => {
      window.print()
      setTimeout(() => {
        this.setState({
          isShowBtn: true
        })
      }, 1000)
    })
  }

  render () {
    return (
      <div className='index-page'>
        <div className='resume-container'>
          <ElementNode dataSource={dataSource}></ElementNode>
        </div>
        <div className={
          classNames(
            'file-pdf-btn',
            {
              'file-pdf-btn--show': this.state.isShowBtn,
              'file-pdf-btn--hide': !this.state.isShowBtn,
            }
          )
        }>
          <Button onClick={this.handlePrint} type='primary'>
            <Icon type="file-pdf" />
            save as pdf
          </Button>
        </div>

      </div>
    )
  }
}
