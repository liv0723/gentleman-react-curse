import './Button1.css'

interface Props {
  label: string,
  parentButton: () => void
}

export default function Button1({label, parentButton}: Props) {
  return (
    <>
    <button className = {'current-button1'} onClick = {parentButton}>
      {label}
    </button>
    </>
  );
}
