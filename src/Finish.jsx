export default function Finish ({subject,selectedQuiz,quizId,points,dispatch,highscore,mode}) {
const a = subject[quizId - 1]
  const b = selectedQuiz.map(x => x.points).reduce((a,b) => a + b)
   return <div className="pb-8">
<h1 className="text-3xl pb-10 leading-tight pt-8 px-6 h-color leading-none">Quiz Completed <br /><strong>You scored...</strong> </h1>
     <div className={`flex-col  flex justify-center align-center text-center mx-10 py-10 gap-y-8 ${mode?'score':'score-light'}`}>
<div className="font-bold text-center justify-center flex gap-x-2 align-center">
    <img className='w-10 h-10 rounded-full' src={a.img} />
    <h1 className='pt-2 text-base'>{a.name}</h1>
  </div> 
       <h1 className='font-bold text-7xl'>{points}</h1>
       <p className='font-light'>out of {b} </p>
       <h6 className="text-xl font-bold pt-3">HighScore : {highscore}</h6>
       </div>
<div className="flex justify-center">
     <button onClick={() => dispatch({type:'play'})} className={`${mode?'play' :'play-light'} mx-10 mt-3 py-6 px-6 w-full font-bold`}>Play Again</button>
  </div>
     </div>
}
