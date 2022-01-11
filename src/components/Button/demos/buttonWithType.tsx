import React from 'react'
import { Button } from 'mizutoki-ui'
import 'mizutoki-ui/es/styles/index.less'

export default () => (
  <div>
    <Button style={{marginRight: 10}}> default button </Button>
    <Button style={{marginRight: 10}} btnType="primary"> primary button </Button>
    <Button style={{marginRight: 10}} btnType="danger"> danger button </Button>
    <Button style={{marginRight: 10}} btnType="link" href="https://google.com"> link button </Button>
  </div>
)
