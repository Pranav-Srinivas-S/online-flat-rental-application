import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {getAllTenants} from "../../../redux/actions/TenantActions";
import TenantComponent from "./TenantComponent";

const TenantList = () => {
    alert("Tenant List");
    const tenants = useSelector((state) => state);

    const fetchTenants = () => getAllTenants();  

    useEffect(() => {
        fetchTenants();
    }, []);
    
    console.log("Tenants : ", tenants);

    return(
        <div className="ui grid container">
            <TenantComponent/>
        </div>
    )
}

export default TenantList;