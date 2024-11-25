
import { useState } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./PostUser.css"
import  {useNavigate} from "react-router-dom"  
const PostUser =()=>{
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        department:""

    });

    const handleInputChange =(event)=>{
        const {name, value}=event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    };
    const navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData)
        try{
            const response=await fetch("http://localhost:8080/api/employee",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(formData)

            });
            const data=await response.json();
            console.log("employee created",data);
            navigate("/")
        }catch(error){
           console.log("Erro creating Employee:",error.message)
        }
    }

    return (
        <>
        <div className="center-form">
            <h1>Post New Employee</h1>
            <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter the Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter the Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Enter the phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      type="text"
                      name="department"
                      placeholder="Enter the department"
                      value={formData.department}
                      onChange={handleInputChange}
                    
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    post Employee
                  </Button>
            </Form>
        </div>
        </>

    )
}
export default PostUser;