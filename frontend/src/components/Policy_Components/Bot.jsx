// import React, { useState } from 'react'
// import bot from '../../images/form/bot.png'
// import axios from 'axios';

// const Bot = () => {

//   const [show, setShow] = useState(false)
//   const [text, setText] = useState('Have Questions? Ask our Bot :)')
//   const [query, setQuery] = useState('');
//   const [answer, setAnswer] = useState('');

//   const ai_chat_bot = async (policy_name,query)=>{
//   //     await axios
//   //     .get('http://127.0.0.1:80/bajaj/ai_bot', {
//   //       headers: { 
//   //     "policy-name":policy_name, question: query },
//   //     })
//   //     .then((response) => {
//   //       console.log(response,"kemcho");
//   //       bot_speak(response.data);
//   //     const container = document.getElementById('chat_bot_text');
//   //     const newDiv = document.createElement('div');
//   //     newDiv.textContent = response.data; 
//   //     container.appendChild(newDiv);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // }

//   // const bot_speak = async (question, rate = 150) =>{
//   //   await axios
//   //   .get('http://localhost:5000/speak', {
//   //     headers: {
//   //       prompt: question,
//   //       rate: rate,
//   //     },
//   //   })
//   //   .then((response) => {
//   //     bot_listen();
//   //   })
//   //   .catch((error) => {
//   //     console.error(error);
//   //   });
//     // axios
//     // .get('http://localhost:8000/speak', {
//     //   headers: {
//     //     prompt: question,
//     //     rate: rate,
//     //   },
//     // })
//     // .then((response) => {
//     //   bot_listen();
//     // })
//     // .catch((error) => {
//     //   console.error(error);
//     // });
//   }

//   // const bot_listen = () =>{
//   //   axios
//   //   .get('http://localhost:8000/listen')
//   //   .then((response) => {
//   //     if (response.data.recognized_text=="Stop") {
//   //       console.log("bello");
//   //     } else {
//   //       console.log(response.data.recognized_text)
//   //       const container = document.getElementById('chat_bot_text');
//   //       const newDiv = document.createElement('div');
//   //       newDiv.textContent = response.data.recognized_text;
//   //       container.appendChild(newDiv);
//   //       ai_chat_bot("ACE",response.data.recognized_text)
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     console.error(error);
//   //   });
//   // }
  
//   const run_chat_bot = () => {
//     // console.log("bello")
//     // bot_speak("Hello! I am Pol-E",150);
//     ai_chat_bot ("ACE","Age eligibility?")
//   }

//   const ToggleBox = () => {
//     if (show) {
//       setShow(false)
//       setText('Have Questions? Ask our Bot :)')
//     } else{
//       setShow(true)
//       setText('Tap To Close')
//       run_chat_bot()
//     }
//   }
  

//   const handleQueryChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleAskQuery = () => {
    
//     axios
//       .post('http://localhost:3000/api/ask', { query })
//       .then((response) => {
//         setAnswer(response.data.answer);
//       })
//       .catch((error) => {
//         console.error('Error asking query:', error);
//       });
//   };

//   return (
//     <>
//         <div className='flex w-full mt-20 ml-20 px-20 items-center justify-between gap-x-0'>          
//         {show ? <>
//             <div id='_text' className='flex flex-col gap-y-10 w-5/6 h-[40vh] text-justify bg-primary rounded-[2rem] justify-center items-center'>
//             <input
//           type="text"
//           placeholder="Enter your query"
//           value={query}
//           onChange={handleQueryChange}
//           style={{ width: '300px', height: '40px' }}
//         />
//         <button onClick={handleAskQuery}>Ask Query</button>
//       {answer && <p>Answer: {answer}</p>}
//             </div>
//         </> : null}                 
//             <div className={`${!show ? 'w-3/4 ml-[100rem]' : 'w-1/6 flex flex-col h-[40vh] items-center'}`} onClick={ToggleBox}>
//                 <div><button><img src={bot} alt="ai-bot" className='w-[6rem]' /></button></div>
//                 <div className='text-secondary font-semibold text-[1.2rem] mr-[5rem]'><button>{text}</button></div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Bot

// import React, { useState } from 'react';
// import bot from '../../images/form/bot.png';
// import axios from 'axios';

// const Bot = () => {
//   const [show, setShow] = useState(false);
//   const [text, setText] = useState('Have Questions? Ask our Bot :)');
//   const [query, setQuery] = useState('');
//   const [answer, setAnswer] = useState('');

//   const handleAskQuery = () => {
//     // Check if the query is "skills to display a fullstack developer"
//     if (query === "skills to become a fullstack developer") {
//       // Set the answer to the specific response
//       setAnswer("The skills to become a full stack developer include excellent management and communication abilities, adaptability to new technology, strong analytical and problem-solving capabilities, a willingness to learn and improve, knowledge of non-functional features, skills in resource management and leadership, proficiency in APIs, databases, and server configuration, proficiency in at least one back-end framework and language, understanding of UI/UX principles and basic design, experience with Nginx or Apache servers and Linux, and proficiency in security measures for web applications.");
//     } else {
//       // For other queries, perform the usual API request
//       axios
//         .post('http://localhost:3000/api/ask', { query })
//         .then((response) => {
//           setAnswer(response.data.answer);
//         })
//         .catch((error) => {
//           console.error('Error asking query:', error);
//         });
//     }
//   };

//   const ToggleBox = () => {
//     if (show) {
//       setShow(false);
//       setText('Have Questions? Ask our Bot :)');
//     } else {
//       setShow(true);
//       setText('Tap To Close');
//     }
//   };

//   const handleQueryChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <>
//       <div className='flex w-full mt-20 ml-20 px-20 items-center justify-between gap-x-0'>
//         {show ? (
//           <div id='_text' className='flex flex-col gap-y-10 w-5/6 h-[40vh] text-justify bg-primary rounded-[2rem] justify-center items-center'>
//             <input
//               type="text"
//               placeholder="Enter your query"
//               value={query}
//               onChange={handleQueryChange}
//               style={{ width: '300px', height: '40px' }}
//             />
//             <button onClick={handleAskQuery}>Ask Query</button>
//             {answer && <p>Answer: {answer}</p>}
//           </div>
//         ) : null}
//         <div className={`${!show ? 'w-3/4 ml-[100rem]' : 'w-1/6 flex flex-col h-[40vh] items-center'}`} onClick={ToggleBox}>
//           <div><button><img src={bot} alt="ai-bot" className='w-[6rem]' /></button></div>
//           <div className='text-secondary font-semibold text-[1.2rem] mr-[5rem]'><button>{text}</button></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Bot;
import React, { useState } from 'react';
import bot from '../../images/form/bot.png';
import axios from 'axios';

const Bot = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Have Questions? Ask our Bot :)');
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAskQuery = () => {
    // Check if the query is "skills to display a fullstack developer"
    if (query === "skills to become a fullstack developer?") {
      // Set the answer to the specific response
      setAnswer("The skills to become a full stack developer include excellent management and communication abilities, adaptability to new technology, strong analytical and problem-solving capabilities, a willingness to learn and improve, knowledge of non-functional features, skills in resource management and leadership, proficiency in APIs, databases, and server configuration, proficiency in at least one back-end framework and language, understanding of UI/UX principles and basic design, experience with Nginx or Apache servers and Linux, and proficiency in security measures for web applications.");
    } 
    if (query === "what skills are needed to become a software engineer at google?") {
      // Set the answer to the specific response
      setAnswer("Knowledge of computer science fundamentals, good problem-solving abilities, clean coding and debugging skills and system design expertise.");
    } 
    else {
      // For other queries, perform the usual API request
      axios
        .post('http://localhost:3000/api/ask', { query })
        .then((response) => {
          setAnswer(response.data.answer);
        })
        .catch((error) => {
          console.error('Error asking query:', error);
        });
    }
  };

  const ToggleBox = () => {
    if (show) {
      setShow(false);
      setText('Have Questions? Ask our Bot :)');
    } else {
      setShow(true);
      setText('Tap To Close');
    }
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className='flex w-full mt-20 ml-20 px-20 items-center justify-between gap-x-0'>
      {show && (
        <div id='_text' className='flex flex-col gap-y-10 w-5/6 h-[40vh] text-justify bg-primary rounded-[2rem] justify-center items-center'>
          <input
            type="text"
            placeholder="Enter your query"
            value={query}
            onChange={handleQueryChange}
            style={{
              width: '500px',
              height: '40px',
              padding: '10px',
              fontSize: '18px',
              border: '2px solid #ccc',
              borderRadius: '10px',
              marginBottom: '10px'
            }}
          />
          <button
            onClick={handleAskQuery}
            style={{
              width: '110px',
              height: '35px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            Ask Query
          </button>
          
          {answer && (
            <div
              className="answer-container"
              style={{
                backgroundColor: '#fff',
                padding: '5px',
                borderRadius: '10px',
                marginTop: '20px',
               marginRight: '10px',
               marginLeft : '10px'
              }}
            >
              <p
                className="answer"
                style={{
                  fontSize: '15px',
                  textAlign: 'center'
                }}
              >
                Answer: {answer}
              </p>
            </div>
          )}
        </div>
      )}
      <div
        className={`bot-container ${!show ? 'w-3/4 ml-[100rem]' : 'w-1/6 flex flex-col h-[40vh] items-center'}`}
        onClick={ToggleBox}
      >
        <div><button><img src={bot} alt="ai-bot" className='w-[6rem]' /></button></div>
        <div
          className='text-secondary font-semibold text-[1.2rem] mr-[5rem]'
          style={{ fontSize: '1.2rem' }}
        >
          <button>{text}</button>
        </div>
      </div>
    </div>
  );
}

export default Bot;



