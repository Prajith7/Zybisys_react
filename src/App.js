import './App.css';
import Navbar from './navbar';
import Content from './content';



const data = [
  {
    title: "name1",
    author: "author1"
  },
  {
    title: "name2",
    author: "author2"
  }
]

export default function Hello() {


  return (
    <div>
      <Navbar />
      <hr />
      <Content data1={data} />
     
    </div>
  );


}
