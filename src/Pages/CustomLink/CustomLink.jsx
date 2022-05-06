import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
            //   color: match ? "orange" : "",
              borderBottom: match ? "2px solid orange" : '0px',
              paddingBottom: match ? "4px":'0px'
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
};
