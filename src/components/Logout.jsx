import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="container-notice">
        <p className="par-secret">
          Welcome <span className="user">{user.nickname}</span> !!!
        </p>
        <button className="btn-log" onClick={() => logout()}>
          Log out
        </button>
      </div>
    )
  );
};

export { Logout };
