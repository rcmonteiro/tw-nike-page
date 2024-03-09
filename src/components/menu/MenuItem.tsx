interface MenuItemProps {
  icon: any
  label: string
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <div className="menu-icon group">
      {props.icon}
      <span className="menu-tooltip group-hover:scale-100">
        {props.label} 💡
      </span>
    </div>
  )
}
export default MenuItem