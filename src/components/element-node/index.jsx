import React from 'react'

import { Row, Col } from 'antd'

import BasicInfo from '../basic-info/index.jsx'
import Experience from '../experience/index.jsx'
import './index.scss'

class ElementNode extends React.Component {
  _renderChildren (child) {
    switch (child.type) {
      case 'basic':
        return <Col span={child.col || 24} key={child}>
          <BasicInfo
            dataSource={child}
          />
        </Col>
      case 'experience':
        return <Col span={child.col || 24} key={child}>
          <Experience
            dataSource={child}
          />
        </Col>
      default:
        return <Col span={child.col || 24} key={child}>
          <ElementNode
            dataSource={child}
          />
        </Col>
    }
  }

  render () {
    const dataSource = this.props.dataSource

    return (
      <div className='element-node'>
        {
          dataSource.content
            ? <div className='element-node__title'>
              {dataSource.content}
            </div>
            : null
        }
        <Row className='element-node__children'>
          {
            dataSource.children && dataSource.children.map((item, i) => (
              this._renderChildren(item)
            ))
          }
        </Row>
      </div>
    )
  }
}

export default ElementNode
