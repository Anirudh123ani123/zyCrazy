import React from "react";

const Icontextwrapper = (props) => {
  let { icon, icontextcss, icontext, img } = { ...props };
  return (
    <>
      {img ? <>{img}</> : icon}
      <span style={icontextcss}>{icontext}</span>
    </>
  );
};

export default Icontextwrapper;
