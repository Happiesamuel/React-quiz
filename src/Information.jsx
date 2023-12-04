export default function Information({questions,sub,dispatch,mode}) {
  console.log(questions );
   return <div className=' text-center pt-16 px-6'>
     <img src={sub.img} className='inf-img'/>
  <h1 className='text-3xl font-bold pt-3  pb-4'>Welcome to the {sub.name} Quiz!</h1>
  <p className='text-xl font-light pb-4'>{questions.length} questions to test your {sub.name} mastery </p>
<div className='flex justify-evenly'>
     <button className={mode?'but':'but-light' }onClick={() => dispatch({type:'selectBack'})}>👈 Back</button>
<button className={mode?'but':'but-light'} onClick={() => dispatch({type:'beginQuiz'})}>Let's start 👍</button>
  </div>
   </div>
}
