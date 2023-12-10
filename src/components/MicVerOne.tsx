import React from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';

const MicVerOne = () => {



const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};





  return (

    <div><AudioRecorder 
    onRecordingComplete={addAudioElement}
    audioTrackConstraints={{
      noiseSuppression: true,
      echoCancellation: true,
    }} 
    downloadOnSavePress={true}
    downloadFileExtension="webm"
  />
  </div>   
    
  )
}


export default MicVerOne;