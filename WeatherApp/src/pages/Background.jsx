
const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        src='/assets/v3.mp4'
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
