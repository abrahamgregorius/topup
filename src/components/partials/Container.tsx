

interface propsType {
    children?: React.ReactNode
    className?: string
}

const Container = (props: propsType) => {
  return (
        <>
            <div className={`w-full max-w-[1450px] mx-auto my-0 ${props.className}`}>
                {props?.children}
            </div>
        </>
    )
}

export default Container