import React from 'react'
import { Menu } from 'mizutoki-ui'
import 'mizutoki-ui/es/styles/index.less'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

export default () => (
  <div>
    <Menu
      defaultIndex="0"
      defaultOpenSubMenus={[]}
      mode="horizontal"
      onSelect={function noRefCheck(){}}
    >
      <MenuItem>
        cool link
      </MenuItem>
      <MenuItem>
        cool link 2
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <SubMenu title="下拉选项">
        <MenuItem>
          下拉选项一
        </MenuItem>
        <MenuItem>
          下拉选项二
        </MenuItem>
      </SubMenu>
    </Menu>
  </div>
)
