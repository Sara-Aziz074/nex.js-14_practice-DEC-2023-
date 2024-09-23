import  Link from "next/link";  
 function  Sum (){
    return(
        <div>
        <h1 className="flex-center  p-24"> This is about page</h1>
        
 <p className="flex flex-center p-32">This is route </p>
        <div>
        
            <Link href="./" className="flex justify-center mt-24 underline hover: text-white ">Back to Home</Link>
        
        </div>
        </div>

        
    )
 }
 export default Sum;