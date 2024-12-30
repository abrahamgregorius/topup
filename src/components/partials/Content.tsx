

interface propsType {
    children?: React.ReactNode
    className?: string
    col?: boolean
}

const Content = (props: propsType) => {
  return (
    <div className={`w-full flex ${props.col ?? "flex-col"} gap-4 py-8 px-8 sm:px-0 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Content