import React from 'react'
type ChildrenProps = {
    children: React.ReactNode
}
function MainTemplates({children}:ChildrenProps) {
  return (
    <div className="flex min-h-dvh justify-between bg-[rgb(225,236,235)]">
        {children}
    </div>
  )
}

export default MainTemplates