import { Col, Button } from "react-bootstrap"

const Label =(props)=> {
    return (
        <><Col xs={12} lg={4} className="text-danger d-flex justify-content-between rounded bg-dark align-items-center">
    <p className="m-0">{props.des}</p>
    <Button className="bg-transparent border-0 text-danger"> &gt;</Button>
    </Col></>
    )
    
}
export default Label