export default function QuestionPage({selectedQuiz,i,dispatch,id,mode}) {

   return <div className="px-6 pt-5">
   <p className="h-color pt-3 pb-4"><em>Question <strong>{i + 1}</strong> of {selectedQuiz.length}</em></p>
     <h3 className="text-2xl pb-4">{selectedQuiz[i].question}</h3>
     <progress value={i + 1} max={selectedQuiz.length} className="progress w-full h-4 rounded-full mt-2"></progress>
<Options mode={mode} dispatch={dispatch} id={id} selectedQuiz={selectedQuiz} i={i}/>
   </div>
}
function Options ({mode,selectedQuiz,i,dispatch,id}) {
   return <div className="flex flex-col gap-y-4 px-6 pt-3">
     {selectedQuiz.at(i).options.map((x,y) => <div onClick={() => dispatch({type:'getId',payload: y})} className={
  id === null ? `${mode?'sub':'sub-light'} py-4 flex gap-x-3 align-center justify-left px-6`   : y === selectedQuiz.at(i).correctOption ? `${mode?'sub':'sub-light'} py-4 flex gap-x-3 align-center px-6 correct justify-left answer`  : `${mode?'sub':'sub-light'} py-4 flex gap-x-3 justify-left align-center px-6 wrong` 
     } key={y}>
       <div className="ch">{String.fromCharCode(y + 65)}</div>
       <div className="text-sm font-bold ">{x}</div>
     
     </div>)}

   </div>
}
