const Banner = ({ width, height }) => {
  const separatorStye = {
    width: `${width}%`,
    height: `${height}px`,
  };
  return <div style={separatorStye}></div>;
};

export default Banner;
