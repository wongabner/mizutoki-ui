import React from 'react'
import { Icon } from 'mizutoki-ui'
import 'mizutoki-ui/es/styles/index.less'

export default () => (
  <div>
    <Icon
      icon="check"
      size="3x"
      theme="success"
    />
    <Icon
      icon="times"
      size="3x"
      theme="danger"
    />
    <Icon
      icon="anchor"
      size="3x"
      theme="primary"
    />
    <Icon
      icon="exclamation-circle"
      size="3x"
      theme="warning"
    />
  </div>
)
