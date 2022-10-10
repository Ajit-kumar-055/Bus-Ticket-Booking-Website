import React ,{ useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () =>{
     
    let history = useHistory();
    const { id } = useParams();
    const ur = "/bus/booking?id="+id
    const [buses, setBuses] = useState([]);
    const [busName, setBusName] = useState(null);
    const [busSource, setBusSource] = useState(null);
    const [busDestination, setBusDestination] = useState(null);
    const [busFair, setBusFair] = useState(null);
    const [busDate, setBusDate] = useState(null);
    const [firstName , setFirstName] = useState(null);
    const [lastName , setLastName] = useState(null);
    const [emailId , setemailId] = useState(null);
    const [noOfPassenger , setnoOfPassenger] = useState(0);

    useEffect(() => {
        loadBus()
    }, []);

    const loadBus = async() => {
        const result = await axios.get(ur);
        setBuses(result.data.c)
        setBusName(result.data.c[0].name)
        setBusSource(result.data.c[0].source)
        setBusDestination(result.data.c[0].destination)
        setBusFair(result.data.c[0].fair)
        setBusDate(result.data.c[0].date)
        
    }
    const total = busFair * parseInt(noOfPassenger)

    const sendEmail = async() => {
        await axios.post('/passenger/',{
            'firstName': firstName,
            'lastName' : lastName,
            'email': emailId,
            'noOfPassenger': noOfPassenger,
            'busId': id,
            'total' : total
        })
    }
    const bookTicket = async() =>{
        const message = "Thank You! "+firstName+" Your ticket has been booked you will recieve a confirmation mail on your email id."
        
        try {
            sendEmail();
        } catch (error) {
            console.log("Error encounter while sendin email" + error)
        }
        alert(message)
        history.push("/")
        
    }

    
    return(
        <div className = "container">
            <section className ="text-center">
                <div className="p-5 bg-image" style={{backgroundImage: 'url("https://mdbootstrap.com/img/new/textures/full/14.jpg")', height: '300px'}} />
                <div className="shadow-lg p-3 mb-5 bg-body rounded-3 card mx-4 mx-md-5" style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                            <h2 className="fw-bold mb-5">Confirm Your Details</h2>
                            <table className="table mb-4">
                               <tbody>
                               {buses.map((b,index) => (
                                <tr className="fw-bold mb-5">
                                    
                                    <td>
                                        <tr>Source : {b.source}</tr>
                                    </td>
                                    <td>Destination : {b.destination}</td>
                                    <td >
                                        {b.name}
                                    </td>
                                    <td>
                                        Fair : {b.fair}
                                        
                                    </td>
                                    <td>Date : {b.date}</td>
                                </tr>
                            ))}
                                </tbody> 
                            </table>
                            <form>
                                
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" onChange={(e) => setFirstName(e.target.value)} required placeholder="First Name" className="form-control disabled" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="text" onChange={(e) => setLastName(e.target.value)} required placeholder="Last Name" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-outline mb-4">
                                    <div className="form-outline">
                                        <input type="email" onChange={(e) => setemailId(e.target.value)} required placeholder="Email Id" className="form-control" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input type="number" min={0} max = {6} onChange={(e) => setnoOfPassenger(e.target.value)} required placeholder="No of Passanger" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <label className="form-control"> Total : {total}</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" onClick = {bookTicket} className="btn btn-primary btn-block mb-4">
                                    Confirm
                                </button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserDetails;