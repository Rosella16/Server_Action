// rafce

import { insertCustomerService } from "@/services/customer.service";
import { revalidateTag } from 'next/cache';

const FormCustomerComponent = () => {

 async function handleCustomerInput(customerInfo) {
    'use server';
    //define new object
 
 const newCustomer = {
    customerName: customerInfo.get('customerName'),
    address: customerInfo.get('address'), };

 
 // calling insert services

 await insertCustomerService(newCustomer)
 revalidateTag('customer')
}

 return (
    <div>
    <form action={handleCustomerInput} class="form-group">
  <label for="customerName">Customer Name:</label>
  <input
    type="text"
    name="customerName"
    id="customerName"
    class="form-control"
    placeholder="Enter customer name"
  />
  <label for="address">Address:</label>
  <input
    type="text"
    name="address"
    id="address"
    class="form-control"
    placeholder="Enter customer address"
  />
  <label for="id">ID:</label>
  <input
    type="text"
    name="id"
    id="id"
    class="form-control"
    placeholder="Enter customer ID"
  />
  <button type="submit" class="btn btn-primary">Add Customer</button>
</form>

      {/* Table to display customers */}
    </div>
 );
};

export default FormCustomerComponent;
