import { getAllCustomerService } from "@/services/customer.service";
import DeleteCustomerButton from "./DeleteCustomerButton";

const TableCustomerComponent = async () => {
  const customers = await getAllCustomerService();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>ID</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <th>{index + 1}</th>
                <td>{customer.customerName}</td>
                <td>{customer.address}</td>
                <td>{customer.id}</td>
                <td>
                  <DeleteCustomerButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCustomerComponent;
