import React from 'react'

import Row from '../row/index.jsx'
import Col from '../col/index.jsx'
import BasicInfo from '../basic-info/index.jsx'
import Experience from '../experience/index.jsx'
import './index.scss'

class ElementNode extends React.Component {
  _renderChildren (child) {
    const style = {
      backgroundColor: child.backgroundColor
    }
    switch (child.type) {
      case 'basic':
        return <Col
          style={style}
          span={parseInt(child.col) || 24}
          key={JSON.stringify(child)}
        >
          <BasicInfo
            dataSource={child}
          />
        </Col>
      case 'experience':
        return <Col
          style={style}
          span={parseInt(child.col) || 24}
          key={JSON.stringify(child)}
        >
          <Experience
            dataSource={child}
          />
        </Col>
      default:
        return <Col
          style={style}
          span={parseInt(child.col) || 24}
          key={JSON.stringify(child)}
        >
          <ElementNode
            dataSource={child}
          />
        </Col>
    }
  }

  render () {
    const { content, children } = this.props.dataSource


    return (
      <Row className='element-node'>
        {
          content
            ? <div className='element-node__title'>
              {content}
            </div>
            : <div></div>
        }
        {
          children && children.map((item, i) => (
            this._renderChildren(item)
          ))
        }
      </Row>
    )
  }
}

export default ElementNode
