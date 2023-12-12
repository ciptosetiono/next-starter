import React from 'react'

import Breadcrumbs from './breadcrumb'
import type { Breadcrumb } from './breadcrumb'
import PageTitle from './page-title'

type HeadingProps = {
    title: string,
    breadcrumbs?: Breadcrumb[]
}

function Heading({title, breadcrumbs} : HeadingProps) {
  return (
    <div className="flex w-full justify-between justify-items-start">
        <PageTitle title={title}/>
        
        {breadcrumbs &&  <Breadcrumbs breadcrumbs={breadcrumbs}/>}
       
    </div>
  )
}

export default Heading