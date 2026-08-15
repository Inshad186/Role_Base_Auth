
type ButtonProps = {
    text : string;
    disabled? : boolean;
    className : string
    type?: "submit" | "reset" | "button"
    onClick?: () => void
}
const Button = ({text, className, type, onClick, disabled} : ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={className}>
        {text}
    </button>
  )
}

export default Button
