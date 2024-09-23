
const Displaying_Data = () => {

    const user ={
        name:"Sara Aziz",
        age: 27,
        profation: "coder",

    }
return( 
    <div>
        <li> name: {user.name}</li>
         <li> age: {user.age}</li>
        <li> profation: {user.profation} 
</li>
    </div>
)
};
export default  Displaying_Data;