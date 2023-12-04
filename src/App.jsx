import './App.css'
import Start from './Start.jsx'
import Head from './Head.jsx';
import { useReducer,useState } from 'react'
import questions from './Questions.js'
import Information from './Information.jsx';
import QuestionPage from './QuestionPage.jsx';
import NextButton from './NextButton.jsx';
import Timer from './Timer.jsx';
import Finish from './Finish.jsx'
import html from '../html.png'
import css from '../css.png';
import js from '../js.png'
import reacts from '../react.png'
const subject =[{
    logo: '😎',
    name: 'HTML',
    img: html,
    id:1,
  },{
    logo: '😍',
    name: 'CSS',
    id:2,
    img:css,
  },{
    logo: '♥️',
    name: 'JavaScript',
    img:js,
    id:3,
  },{
    logo: '🫠',
    name: 'React',
    id:4,
    img:reacts,
  },

]

function reducer(state,action) {
   switch(action.type) {
     case 'selectQuiz':
       return {...state,quizId:action.payload,status:'active',selectedQuiz:questions[action.payload - 1]}
     case 'selectBack':
       return initialState
     case 'beginQuiz':
       return {...state,status:'start',time:state.selectedQuiz.length * 10}
     case 'nextQuestion':
       return {...state,i : state.i + 1,status: state.i + 1 === state.selectedQuiz.length ? 'finish': state.status,id:null,highscore:state.highscore > state.points? state.highscore : state.points}
     case 'getId':
       return {...state,id:action.payload,points:state.selectedQuiz.at(state.i).correctOption === action.payload ? state.points + state.selectedQuiz.at(state.i).points :state.points}
     case 'tick':
       return {...state,time:state.time - 1,status:state.time === 0? 'finish' : state.status}
     case 'play':
       return {...initialState,highscore:state.highscore}
     case 'dark':
       return {...state,dark:!state.dark}
   }

}
const initialState ={
  quizId:null,
  status:'ready',
  selectedQuiz: [],
  i : 0,
  id:null,
  points:0,
  time:0,
  highscore:0,
}

export default function App() {;
  const [{quizId,status,selectedQuiz,i,id,points, time,highscore},dispatch] = useReducer(reducer,initialState)
const [mode,setMode] = useState(true)
return <div className={mode?'app':'light'}>
  <Head dark={true} mode={mode} setMode={setMode} dispatch={dispatch} subject={subject} quizId={quizId}/>
  {status === 'ready' && <Start subject={subject} mode={mode} dispatch={dispatch} quizId={quizId}/>}
  {status === 'active' && <Information mode={mode} dispatch={dispatch} questions={selectedQuiz} sub={subject[quizId - 1]} />}
  {status === 'finish' && <Finish highscore={highscore} mode={mode} dispatch={dispatch} subject={subject} selectedQuiz={selectedQuiz} quizId={quizId} points={points}/>}
  {status === 'start' && <>
  <QuestionPage mode={mode} selectedQuiz={selectedQuiz} id={id} dispatch={dispatch} i={i}/>
    <div className="flex justify-evenly pt-4">
      <Timer mode={mode} dispatch={dispatch} time={time} />
      <NextButton mode={mode} dispatch={dispatch} id ={id} />
      </div>
  </>}
  </div>
}
