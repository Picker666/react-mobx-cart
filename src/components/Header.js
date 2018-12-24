import React, {PropTypes} from 'react';
import { observer } from 'mobx-react';

const Header = observer((props, {store}) => {
  return (
  <div className="head">
    <label for="selectAll" className="head-item">
      <input
        id="selectAll"
        type="checkbox"
        checked={store.checkedAll}
        onChange={store.onCheckedAll}
      /> 全选
    </label>
    <div className="head-item c-name">商品</div>
    <div className="head-item">单价</div>
    <div className="head-item c-buyNum">数量</div>
    <div className="head-item">小计</div>
    <div className="head-item">操作</div>
  </div>
)});

Header.contextTypes = {
  store: PropTypes.object
};

export default Header;