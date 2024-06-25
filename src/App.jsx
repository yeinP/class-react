
import Button from "./components/Button"
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{padding:"40px", margin: "0 auto"}}>
      <div style={{border: "1px solid red", width:"400px", textAlign:"center"}}>
        <span style={{display:"block", padding:"10px 0", fontSize:"1.5rem"}}>Are you sure?</span>
      
        <div className = "flex gap-1 justify-center">
        {/* <Button text={'Cancle'} color={'bg-red-500'}/>
        <Button text={'Ok'} color={'bg-blue-500'}/> */}
        </div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
