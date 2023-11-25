import { Card, CardBody, CardColumns, CardFooter, CardHeader, CardTitle } from "reactstrap";


const StudentDashboard=()=>{
    
    return (
    <div>
        <Card color="dark" inverse style={{marginTop:'1cm'}}>
            
            <CardTitle className="text-center"><h3>Student Info</h3></CardTitle>
            <CardHeader>Student Name</CardHeader>
            <CardBody></CardBody>
            <CardFooter></CardFooter>
        </Card>
    </div>
    );
}
export default StudentDashboard
