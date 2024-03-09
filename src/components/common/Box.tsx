interface BoxProps {
  className?: string
  color: string
  children?: any
}

const Box = ({ color, className = '', children}: BoxProps) => {
  return (
    <div className={`rounded-xl p-8 ${color} ${className}`}>{children}</div>
  )
}
export default Box