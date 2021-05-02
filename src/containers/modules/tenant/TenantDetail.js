import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getTenant } from "../../../redux/actions/TenantActions";

const TenantDetail = () => {
    const tenant = useSelector((state) => state.tenant);

    const {tenantId, tenantName, tenantAge, tenantAddress} = tenant;

    const {tId} = useParams();

    //const dispatch = useDispatch();

    console.log(tId);

    const fetchTenantDetail = () => getTenant(tId);

    useEffect(() => {
        if(tId && tId != "") 
            fetchTenantDetail();
    }, [tId]);

    return (
        <div className="ui grid container">
          {Object.keys(tenant).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.moneycrashers.com%2Ftips-tenant-landlords-find-apartment%2F&psig=AOvVaw3XAVGNx2oYpJG2jY0DM2mC&ust=1620038368910000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCh57HnqvACFQAAAAAdAAAAABAD" alt="Tenant Image"/>
                  </div>
                  <div className="column rp">
                    <h1>{tenantId}</h1>
                    <h1>{tenantName}</h1>
                    <h2>Age : {tenantAge}</h2>
                    <p>{tenantAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    );
};

export default TenantDetail;