import React from 'react'

const Bloglist = (props) => {
  const { datas } = props
  return (
    <div>
      {datas.map(ele => {
        return (
          Object.entries(ele).map((item,index) => {
            switch (item[0]) {
              case "title":
                return (<h1 key={index}>{item[1]}</h1>)
              case "author":
                return (<p key={index}>{item[1]}</p>)
            }
          })
        )
      })}
    </div>
  )
}
export default Bloglist;

