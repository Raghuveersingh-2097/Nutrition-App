import React, { Component } from 'react'

class GetAllPayments extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false,
        };
    }

componentDidMount(){
    fetch('http://localhost:8080/payment/allpayments')
    .then(res => res.json())
    .then(result =>{
            this.setState({
                isLoaded:true,
                items:result
            });
        });
    }

    render() {
        const{items} =this.state;
        return (
              <div>
                <h1 className="display-4 text-center">PAYMENTS</h1>
                <div className="container">
                <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Payment Gateway</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {items.map(item =>(
                        console.log(item.createdDate),
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.transactionId}</td>
                            <td>{item.paymentGateway}</td>
                            <td>{item.paytmNumber}</td>
                            <td>{item.actualAmount}</td>
                            <td>{item.createdDate}</td>
                        </tr>    
                        ))}
                        {/* <th scope="row">1</th>
                        <td>P01</td>
                        <td>UPI</td>
                        <td>Dheeraj@oksbi</td>
                        <td>9989087299</td> */}
                    
                </tbody>    
                </table>
                </div> 
                </div>
    
  
   )
}

}

export default GetAllPayments;
