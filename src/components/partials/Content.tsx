import React from 'react'

interface propsType {
    children?: React.ReactNode
}

const Content = (props: propsType) => {
  return (
    <div className='history-item w-full flex flex-col gap-4 py-8 px-8 sm:px-0'>
        {props.children}
    </div>
  )
}

export default Content