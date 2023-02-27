import React, { memo } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { discoverMenu } from '@/services/local-data';

import { DiscoverWrapper, TopMenu } from './style';


const PDDiscover = memo(() => {
  const location = useLocation();

  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink 
                    to={item.link}
                    className={classNames(item.link === location.pathname && 'active')}
                  >
                    {item.title}
                  </NavLink>
                </div>
              );
            })
          }
        </TopMenu>
        <Outlet/>
      </div>
    </DiscoverWrapper>
  )
})

export default PDDiscover