
function Start({dispatch,mode,subject}) {
  return<div>
<h1 className="text-4xl pt-10 px-6 h-color leading-none">Welcome to the <strong>Frontend Quiz!</strong> </h1>
    <p className="h-color pt-3 pb-8 px-6"><em>pick a subject to get started</em></p>
    <Subjects dispatch={dispatch} subject={subject} mode={mode} />
    </div>
}

function Subjects({dispatch,mode,subject }) {
   return <div className='flex flex-col gap-y-5'>
     {subject.map(x => <div onClick={() => dispatch({type:'selectQuiz',payload:x.id})} className={`${mode? 'sub':'sub-light'} py-5 flex gap-x-3 align-center px-6 mx-6`} key={x.id}>
       <img src={x.img} className="w-10  h-10 rounded-full"/>
       <h1 className="text-xl font-bold pt-1">{x.name}</h1>
       </div>)}
     </div>
}

export default Start