
type ButtonProps = {
    text : string;
    className : string
    type?: "submit" | "reset" | "button"
    onClick?: () => void
}
const Button = ({text, className, type, onClick} : ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}>
        {text}
    </button>
  )
}

export default Button
