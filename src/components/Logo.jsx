import React from "react";

function Logo({ width = "200px" }) {
  return (
    <div>
      <img src="/logo.png" alt="BlogNest" width={width} />
    </div>
  );
}

export default Logo;
