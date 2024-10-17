import { useState } from "react";

export default function Player({
  file,
  duration,
  isSleep,
}: {
  file: string;
  duration: string;
  isSleep: boolean;
}) {
  let audio: any = null;

  const [state, setState] = useState({
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    currentTime: 0,
    isPlaying: false,
  });

  const onTimeUpdate = (e: any) => {
    setState({
      ...state,
      currentTime: Math.floor(e.target.currentTime),
    });
  };

  const handlePlay = () => {
    if (audio.paused) {
      audio.play();
      setState({
        ...state,
        isPlaying: true,
      });
    } else {
      audio.pause();
      setState({
        ...state,
        isPlaying: false,
      });
    }
  };

  const secondsToTime = (time: number) => {
    return `${Math.floor((time % 3600) / 60)}:${Math.floor(time % 60)}`;
  };

  return (
    <div className="w-full h-full text-black">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full h-12 flex justify-center items-center px-4"></div>
        <div className="w-full flex flex-row h-16 items-center justify-between px-4 pb-4">
          <div className="w-16 text-left">
            <p>{secondsToTime(state.currentTime)}</p>
          </div>
          <div
            className="w-16 h-16 font-bold center-items cursor-pointer"
            onClick={handlePlay}
          >
            {state.isPlaying ? (
              <img alt={`pause`} src={"/pause.svg"} />
            ) : (
              <img alt={`play`} src={"/play.svg"} />
            )}
          </div>
          <div className="w-16 text-right">
            <p>{duration}</p>
          </div>
        </div>
      </div>
      {file && (
        <audio
          loop={isSleep}
          onTimeUpdate={onTimeUpdate}
          ref={(audioRef) => (audio = audioRef)}
          src={file}
          autoPlay={false}
        />
      )}
    </div>
  );
}
