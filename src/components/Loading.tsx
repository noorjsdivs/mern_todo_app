import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
   
      <div className="wrapper">
        <div className="cloud">
          <div className="cloud_left"></div>
          <div className="cloud_right"></div>
        </div>
        <div className="rain">
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
        <div className="surface">
          <div className="hit"></div>
          <div className="hit"></div>
          <div className="hit"></div>
          <div className="hit"></div>
          <div className="hit"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
