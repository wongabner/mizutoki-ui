import React from 'react'
import { Icon } from 'mizutoki-ui'
import 'mizutoki-ui/es/styles/index.less'

export default () => (
  <div>
    <Icon
      icon="spinner"
      size="3x"
      spin
      theme="primary"
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="success"
    />
  </div>
)
