import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  const generateAnswer = async () => {
    setAnswer("loading..");
    try {
      const response = await axios.post(

        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC9rh-udHt-vg0QMVYgP2Bu_RJRPCuzN2A',
        { 
          contents: [
            { parts: [{ text: question }] }
          ]
        }
      );
      
      setAnswer (response['data']['candidates'][0]['content']['parts'][0]['text']);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className='part-1'>
      <h1>AI Chat</h1>
      <textarea
      value={question} onChange={(e)=>setQuestion(e.target.value)} 
      cols="30"
      rows="10"
    ></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
      <pre>{answer}</pre>
      </div>
    </>
  );
}

export default App;
