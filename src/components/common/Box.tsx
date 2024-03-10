interface BoxProps {
  className?: string
  color: string
  children?: any
}

const Box = ({ color, className = '', children}: BoxProps) => {
  return (
    <div className={`rounded-xl p-4 ${color} ${className}`}>{children}</div>
  )
}
export default Box