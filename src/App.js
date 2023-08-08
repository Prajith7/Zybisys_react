import './App.css';
import Navbar from './navbar';
import Content from './content';
import Mybutton from './fetchapi';
import Timer from './timer';
import { Toggle } from './Toggle';

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
      <Mybutton/>
      <Timer/>
      <Toggle/>
    </div>
  );


}
