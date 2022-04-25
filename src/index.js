//import {add, hello} from './util';
import './style.css';
import './header.css';
import List from './List';
//import logo from './images/Latest.png';

/* const text = hello('<h1>Shalom HI</h1>');
const num = add(12,2);
const img = `<img src=${logo} alt="logo" />`; */
const users = [
    {
      id: 1,
      name: "블랙 위도우",
    },
    {
      id: 2,
      name: "아이언맨",
    },
    {
      id: 3,
      name: "헐크",
    },
    {
      id: 4,
      name: "스파이더맨",
    },
    {
      id: 5,
      name: "캡틴 아메리카",
    },
  ];
  
  document.getElementById("root").appendChild(List({ userList: users }));