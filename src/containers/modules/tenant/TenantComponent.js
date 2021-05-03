import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TenantComponent = () => {
    const tenants = useSelector((state) => state.allTeanants.tenants);

    const renderList = tenants.map((tenant) => {
        const {tenantId, tenantName, tenantAge} = tenant;
        return(
            <div className="four wide coloumn" key={tenantId}>
                <Link to={`/tenant/view-tenant/${tenantId}`}>
                    <div className="ui link cards">
                        <div classname="card">
                            <div className="content">
                               <div className="header">{tenantName}</div> 
                               <div className="meta">{tenantAge}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default TenantComponent;