import Link from "next/link";

 
 const Dashboard = () => {
    return (
        <div className="flex justify-center mt-10">


            <div className="font-bold underline"> Dashboard_Page </div>
           
  <div className="justify-center mt-10 no-underline">
  <br/>
     <p>Nested_Route</p>   <br/>
 <ul>
    <li>
        Analytics
    </li>

    <li>
        Settings
    </li>
 </ul>
  
  </div>
    <div className="underline hover: text-purple-400 flex justify-end gap-5">
        
        <Link href="about" >about</Link>
        
        <Link href="contact_us">Contact_us</Link>
        <Link href="dashboard/analytics" >analytics</Link>
        <Link href="dashboard/setting" >setting</Link>

        </div>       

        </div>
    )
 };

 export default Dashboard;
