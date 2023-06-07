import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import { BsFillTelephoneFill} from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { useEffect, useState } from "react";

const UserRequest = ({onValueChange, data}) => {

    const [departure, setDeparture] = useState()

    const handleConfirm = () => {
        const token = localStorage.getItem("token1")

        fetch("http://localhost:3300/api/route", {
            method: "POST",
            body: JSON.stringify({
                id: data._id,
            }),
            headers: {
                'authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            }
           
        }).then(res => res.json())
            .then(json => console.log(json))
        onValueChange(2, departure);
    }

    useEffect(() =>{
        console.log(data)
        fetch(`http://localhost:3300/api/aStreet/${data.departure}`, {
            method: "GET",
        })
        .then(result => result.json())
        .then(json => setDeparture(json.street.name))
    },[])


    return (
        <div className="fixed-bottom ">
            <Card className="taxi-profile-card">
                <Card.Body className="taxi-profile-card-body">
                    <div className="d-flex justify-content-between align-items-center gap-3 mb-2 pt-3 pb-3 taxi-profile-card-head">
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <ProfilePicture user={true} />
                            <span className="fs-6 fw-semibold">La tua richiesta!</span>    
                        </div>
                        <div className="rounded-circle d-flex align-items-center bg-success justify-content-center text-white" style={{ width: "40px", height: "40px" }}>
                            <BsFillTelephoneFill size={20} className="mr-3" />
                        </div>
                    </div>
                    <div className="user-request-address px-4 pb-1 d-flex flex-column justify-content-center align-items-center">
                        <h6 className="mb-1 text-muted">Angelo ti aspetta qui</h6>
                        <div className="d-flex justify-content-start align-items-center gap-1">
                            <MdPlace size={20} className="mr-6" style={{ "color": "#31C48D" }} />
                            <span className="fs-6 fw-semibold">{departure}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center px-4 pt-2">
                        <div>
                            <div>
                                <h6 className="mb-1 text-muted">Destinazione</h6>
                                <span className="ml-2 fw-semibold">{data.destination}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mb-1 text-muted">1 Persona</h6>
                                <span className="ml-2 fw-semibold">0.5km</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-2 mb-3 align-items-center justify-content-center gap-3">
                        <Button variant="danger" onClick={() => onValueChange(0)}>Rifiuta</Button>
                        <Button variant="success" onClick={handleConfirm}>Accetta</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserRequest;