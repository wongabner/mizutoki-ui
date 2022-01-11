import React from 'react'
import { Icon, Button } from 'mizutoki-ui'
import 'mizutoki-ui/es/styles/index.less'

export default () => (
  <div>
    <Icon
      icon="check"
      size="3x"
    />
    <Icon
      icon="times"
      size="3x"
    />
    <Icon
      icon="anchor"
      size="3x"
    />
    <Icon
      icon="trash"
      size="3x"
    />
    <br />
    <br />
    <Button
      btnType="primary"
      disabled={false}
      size="lg"
    >
      <Icon icon="check" />
        check
    </Button>
  </div>
)
