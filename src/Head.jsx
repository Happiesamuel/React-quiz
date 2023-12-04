function Head({quizId, subject,dispatch,mode,setMode}) {
  const a = subject.find(x => x.id === quizId)
  if(!quizId) return  <Noquiz setMode={setMode} dispatch={dispatch} mode={mode}/>
   return <Quiz mode={mode} setMode={setMode} a={a}/>

}
function Noquiz({mode,setMode}) {
  // console.log(dark);
console.log(mode);
   return <div className="flex justify-end align-center pt-6 mx-6  gap-x-2">
  <div className="relative text-xs">☀️</div>
    <div className={mode?'mod':'mod-light'}>
      {mode === false && <button onClick={()=>setMode(true)} className="bot float-left"> </button>}
      {mode && <button onClick={() => setMode(false)} className="bot float-right"> </button>}
    </div>
    <div className="relative text-xs">🌙</div>
  </div>
}
function Quiz({a,mode,setMode}) {
    return <div className="flex  pt-6 mx-6 justify-between align-center">
  <div className="font-bold flex gap-x-3 align-center">
    <img className='w-8 h-8 rounded-full' src={a.img} />
    <h1 className=''>{a.name}</h1>
  </div>     
   <div className="flex justify-end align-center gap-x-2">
  <div className="relative text-xs">☀️</div>
    <div className={`${mode?'mod':'mod-light'}`}>
      {mode === false && <button onClick={()=>setMode(true)} className="bot float-left"> </button>}
      {mode && <button onClick={() => setMode(false)} className="bot float-right"> </button>}
    </div>
    <div className="relative text-xs">🌙</div>
  </div>
      </div>
}

export default Head