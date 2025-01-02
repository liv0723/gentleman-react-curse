import './Button.css';

interface Props {
  label: string,
  parentMethod: () => void
}

export default function Button({label, parentMethod}: Props) {

  return (
    <>
    <button className = {'current-button'} onClick = {parentMethod}>
      {label}
    </button>
    </>
  );
}





