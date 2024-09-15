import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="pyramid-loader ">
        <div className="wrapper flex items-center justify-center w-full">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
