import React from "react";
import "./styles.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


// import { Form, Field } from "@leveluptuts/fresh";

//  const onSubmit = (data) => console.log(data);

function PaymentForm() {
  return (
    <div className="col-md-12 " >
        <div className="card card-height-width">
        <Form>
      <div className="form-group">
              <label htmlFor="username">Customer Name</label>
              <Input required
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Pay Id</label>
              <Input required
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Bill Id</label>
              <Input required
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Cust Id</label>
              <Input required
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Amount</label>
              <Input required
                type="text"
                className="form-control"
                name="username"
              />
            </div>
      <div className="form-group">
         <button className="btn btn-primary btn-block"  >
                <span>Submit</span>
              </button>
            </div>
           
    </Form>
    </div>
    </div>
      
  );
}

export default PaymentForm
