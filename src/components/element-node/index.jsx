import React from 'react'
import { Icon } from 'antd'
import Row from '../row/index.jsx'
import Col from '../col/index.jsx'
import BasicInfo from '../basic-info/index.jsx'
import Experience from '../experience/index.jsx'
import './index.scss'

class ElementNode extends React.Component {
  _renderChildren (child) {
    const style = {
      backgroundColor: child.backgroundColor,
      color: child.fontColor
    }
    const commonProps = {
      style,
      span: parseInt(child.col) || 24,
      key: JSON.stringify(child)
    }

    switch (child.type) {
      case 'basic':
        return <Col
          {...commonProps}
        >
          <BasicInfo
            dataSource={child}
          />
        </Col>
      case 'experience':
        return <Col
          {...commonProps}
        >
          <Experience
            dataSource={child}
          />
        </Col>
      default:
        return <Col
          {...commonProps}
        >
          <ElementNode
            dataSource={child}
          />
        </Col>
    }
  }

  render () {
    const { content, children, iconType } = this.props.dataSource
    console.log(content, iconType)
    return (
      <Row className='element-node'>
        {
          content
            ? <div className='element-node__title'>
              <Icon type={iconType} />
              {content}
            </div>
            : null
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
