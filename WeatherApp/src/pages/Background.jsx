const Background = ({ theme }) => {
  const videoSrc = theme === "light" ? "/assets/light.mp4" : "/assets/dark.mp4";

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
      </video>
    </div>
  );
};

export default Background;
