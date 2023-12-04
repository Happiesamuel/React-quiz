export default function NextButton({dispatch,id,mode}) {
  console.log(id,id === null);
if (id === null) return ''
  else return <button onClick={() => dispatch({type:'nextQuestion'})} className={mode?'but':'but-light'}>Next 👉</button>
}
