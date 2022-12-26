import React from "react";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CancelIcon from "@mui/icons-material/Cancel";
import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
 
function Hero() {
  const[input, setInput] = useState();
  const [isListening, setIsListening] = useState(false);
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://" + website.split(" ").join(""));
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },

    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
   
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript("");
  };

  return (
    <div className="hero-container">
      <input
        placeholder="Type Location "
        type="text"
        value={input || transcript}
          onChange={(e) => setInput(e.target.value)}
      />
      

      <KeyboardVoiceIcon
        ref={microphoneRef}
        onClick={handleListing}
        // onDoubleClick={stopHandle}
        sx={{
          color: "red",
          width: "4rem",
          marginLeft: "-3.8rem",
          marginTop: "2rem",
          height: "2rem",
          fontSize: "2.6rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
       {(input && input.length > 0) || (transcript && transcript.length > 0) ? (
        <CancelIcon
          onClick={() =>{
            stopHandle();
            resetTranscript("");
            setInput("");
          }}
          sx={{
            color: "red",
            // marginLeft: "-2rem",
            padding: "0.3rem",
            height: "2rem",

            fontSize: "1 rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        ""
      )}
      <button>Search</button>
    </div>
  );
}

export default Hero;
