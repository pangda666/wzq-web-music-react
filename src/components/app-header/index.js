/* eslint-disable jsx-a11y/heading-has-content */
import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { 
  useLocation,
  useNavigate,
  // NavLink
} from 'react-router-dom';

import { headerLinks } from '../../services/local-data';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';

import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const PDAppHeader = memo(() => {
  const [curSelectedNavPath, setCurSelectedNavPath] = useState('/');

  const navigate = useNavigate();
  const location = useLocation();

  function handleNavClick(nav) {
    navigate(nav.link);
  }

  useEffect(() => {
    setCurSelectedNavPath(location.pathname);
    if (location.pathname === '/discover') {
      navigate(location.pathname + '/recommend');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const showItem = (item, index) => {
    if (index < 3 || index > 4) {
      return (
        <div 
          className={classNames(curSelectedNavPath.includes(item.link) && 'active')}
          onClick={() => handleNavClick(item)}
        >
          { item.title }
          <i className='sprite_01 icon'></i>
        </div>
        // <NavLink to={item.link}>
        //   { item.title }
        //   <i className='sprite_01 icon'></i>
        // </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <h1 className='logo sprite_01'></h1>
          <ul className='select-list'>
            {
              headerLinks.map((item, index) => (
                  <li key={item.title} className={classNames('select-item')}>
                    { showItem(item, index) }
                  </li>
                )
              )
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login-btn">登录</div>
        </HeaderRight>
      </div>
      <div className='divider'>
      </div>
    </HeaderWrapper>
  )
})

export default PDAppHeader