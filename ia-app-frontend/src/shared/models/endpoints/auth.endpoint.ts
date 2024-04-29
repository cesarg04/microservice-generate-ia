enum AuthStatic {
    /**
     * @member {string}
     * @method post
     * @version 1.0
     * @type public
     * @description register
     */
    register = "auth/register",

    /**
     * @member {string}
     * @method get
     * @version 1.0
     * @type public
     * @description register with google
     */
    googleAuth = "auth/google",

     /**
     * @member {string}
     * @method get
     * @version 1.0
     * @type public
     * @description register with google
     */
     login = "auth/login",

  }
  
  const AuthDynamic = {
    // /**
    //  * @member {string}
    //  * @method post
    //  * @version 2.0
    //  * @description google social network login
    //  */
    // LoggedUserGoogleCallback: (search: string) =>
    //   `/v2/users/login/google/callback${search}`,
  };
  
  export const AuthEndpoints = {
    ...AuthDynamic,
    ...AuthStatic,
  };
  
  export type AuthEndpoints = typeof AuthEndpoints;
  