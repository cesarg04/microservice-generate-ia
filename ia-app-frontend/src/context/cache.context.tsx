
import ENVIRONMENT_VAR from '@/shared/constants/env/env.const';
import Cookies from 'js-cookie'
import React, { createContext, useCallback, useContext, useState } from 'react'


interface CookieManagerContextType {
  setCookie: (name: string, value: string) => void;
  removeCookie: (name: string) => void;
  cookies: { [key: string]: any };
}

const CookieManagerContext = createContext<CookieManagerContextType>({
  setCookie: () => {},
  removeCookie: () => {},
  cookies: {},
});

export const CookieManagerProvider: React.FC<any> = ({ children }) => {
  const [cookies, setCookies] = useState<{ [key: string]: any }>(Cookies.get());
  const { COOKIE_DOMAIN } = ENVIRONMENT_VAR;
  const setCookie = useCallback(
    (name: string, value: string) => {
      if (cookies[name] !== value) {
        Cookies.set(name, value, {
          domain: COOKIE_DOMAIN,
          expires: 30,
          sameSite: "none",
          secure: true,
        });
        setCookies((prevCookies) => ({ ...prevCookies, [name]: value }));
      }
    },
    [cookies]
  );

  const removeCookie = useCallback((name: string) => {
    Cookies.remove(name, {
      domain: COOKIE_DOMAIN,
      sameSite: "none",
      secure: true,
    });
    setCookies((prevCookies) => {
      const { [name]: _, ...rest } = prevCookies;
      return rest;
    });
  }, []);

  const value = { setCookie, removeCookie, cookies };

  return (
    <CookieManagerContext.Provider value={value}>
      {children}
    </CookieManagerContext.Provider>
  );
};

export const useCookieManager = (): CookieManagerContextType =>
  useContext(CookieManagerContext);

