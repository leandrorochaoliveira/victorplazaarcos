import { useState } from 'react'
import Menu from './menu'

export default function MenuMobile () {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-10">
      <div className="space-y-2" onClick={() => setOpen(!open)}>
        <span className="block w-8 h-0.5 bg-secondary"></span>
        <span className="block w-8 h-0.5 bg-secondary"></span>
        <span className="block w-5 h-0.5 bg-secondary"></span>
      </div>       
      <div className={"absolute top-20 left-0 w-full z-50 bg-primary overflow-hidden transition-all  " + (open ? 'h-38 pb-2 pt-2 border-t-2 border-t-primaryLight border-b-2 border-b-primaryLight' : 'h-0')}>
        <Menu></Menu>
      </div>
    </div>
  )
}