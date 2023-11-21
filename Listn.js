import { Link } from "react-router-dom";
import {  List, ListGroup, ListGroupItem } from "reactstrap";

const Listn=()=>{
    return(
        <>
        <ListGroup className="text-left" >
            <ListGroupItem color="success">
        <Link  className="list-group-item list-group-item-action"  to="/AdminLogin" tag="a">Admin Login</Link>
            </ListGroupItem>

            <ListGroupItem color="success">
            <Link  className="list-group-item list-group-item-action" to="/studentdashboard" tag="a" >Student DashBoard</Link>
            </ListGroupItem>

            <ListGroupItem color="success">
            <Link  className="list-group-item list-group-item-action" to="/toas" tag="a" >Placement List</Link>
            </ListGroupItem>

            <ListGroupItem color="success">
            <Link  className="list-group-item list-group-item-action" to="#" tag="a" >Campus List</Link>
            </ListGroupItem>
            
            <ListGroupItem color="success">
            <Link  className="list-group-item list-group-item-action" to="#" tag="a" >Year Wise Record</Link>
            </ListGroupItem>
            

        </ListGroup>
        </>
    );
}
export default Listn
