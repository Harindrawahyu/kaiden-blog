import './App.css'
import useCounter from './js/useCounter'
import Button from './components/button'

function App() {
  const { count, handleIncrement, handleDecrement, handleResetCounter } = useCounter(0, 1);

  return (
  <div className="flex flex-col justify-center items-center h-screen gap-4">
    {/* Counter row */}
    <div className="flex items-center gap-4">
      <Button onClick={handleDecrement} text="-" />
      <span className="text-xl">{count}</span>
      <Button onClick={handleIncrement} text="+" />
    </div>

       {/* Reset button at the top */}
    <Button onClick={handleResetCounter} text="Reset" />
  </div>
    
  )
}

export default App;
