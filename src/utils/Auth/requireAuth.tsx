import React from 'react';

import { useSelector } from 'react-redux';

import type {RootState} from '../../store';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

interface RequireAuthProps {
  allowed: boolean; // 是否允许访问该路由
  redirectTo: string; // 如果不允许访问，重定向到哪个路由
  children: React.ReactNode; // 需要保护的组件
}

const RequireAuth: React.FC<RequireAuthProps> = ({allowed,redirectTo,children}) => {
  const { token } = useSelector((state: RootState) => state.authSlice);
  const isLogin = Boolean(token);
  const navigate = useNavigate();
  // 如果没有登录，则重定向
  useEffect(() => {
    if (isLogin !== allowed) { //isLogin为true表示已登录，allowed表示当前路由是否需要登录权限
      navigate(redirectTo);
    }
  }, [isLogin, allowed, redirectTo]);
  return allowed===isLogin ? <>{children}</> : <></>;
}

export default RequireAuth;