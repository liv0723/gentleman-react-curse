import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';
import Button1 from './components/Button1/Button1';
import Paragraph from './components/Paragraph/Paragraph';


function App() {
  const [count, setCount] = useState(0);

  const countMore = () => {
    setCount((count) => count+1);
  }

  const [count1, setCount1] = useState(0);
  const count1Method = () => {
    setCount1((count1) => count1 + 2)
  }


  return (
    <>
    <Button label = {`Count is ${count}`} parentMethod = {countMore}/>
    <Button1 label = {`Count1 is ${count1}`} parentButton={count1Method} />
    <Paragraph name = {'yam'} age = {36}/>
    </>
  )
}

export default App
