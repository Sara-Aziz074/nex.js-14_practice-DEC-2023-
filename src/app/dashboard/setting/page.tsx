import Link from "next/link";

const Settings = () => {

    return( <div className="mt-10 flex-1">

Settings_Page
        <div className="mt-10 flex justify-center gap-5 underline">
       
        
        <Link href= {"/dashboard/setting/pasword"}>Pasword</Link>
        <Link href= {"/dashboard/setting/profile"}>Profile</Link>

        </div>
        </div>
    )
};
export default Settings;