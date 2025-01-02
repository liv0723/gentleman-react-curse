import './Paragraph.css'

interface Props {
  name: string,
  age: number
}

export default function Paragraph({name, age} : Props ) {
  return (
    <>
    <p className = {'parent-Paragraph'} >The name  is <u>{name}</u> ,<br></br> the age is {age} </p>
    </>
  );
}


