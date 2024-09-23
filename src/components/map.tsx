import { title } from "process";

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];


const Maapp = () => {
 return ( <div>

    {products.map((products,index)=>{
        return (<li>
            {products.title}
        </li>);
    })}
 </div>

 )
};
export default Maapp;