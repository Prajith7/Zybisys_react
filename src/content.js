import React from 'react'
import Bloglist from './bloglist'
 const Content = (props) => {
  const {data1}=props
  
  return (
    <Bloglist datas={data1} />
  )

}
export default Content


