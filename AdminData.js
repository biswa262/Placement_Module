import AdminUpdate from "./AdminUpdate";
import { useState,useEffect } from "react";
import NoData from "./NoData";
import Url from "../SpringApi/Url";
import { toast } from "react-toastify";

const AdminData=()=>{
    const [data, setdata]=useState([])
    const getdata=()=>{
        fetch(`${Url}/admin/data`)
        .then((res)=>res.json())
        .then((d)=>setdata(d))   
        
    }
    useEffect (()=>{
        getdata();
    },[])
   

   
    return(
        <div>
            {
                data.length>0 ? data.map((item)=> <AdminUpdate data={item}/>):<NoData/>
            }
        </div>
    );
}
export default AdminData
