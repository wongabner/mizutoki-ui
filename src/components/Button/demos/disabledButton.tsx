import React from 'react'
import { Button } from 'mizutoki-ui'
import 'mizutoki-ui/es/styles/index.less'

export default () => (
  <div>
    <Button disabled style={{marginRight: 10}}> disabled button </Button>
    <Button btnType="link" disabled href="https://google.com"> disabled link button </Button>
  </div>
)
