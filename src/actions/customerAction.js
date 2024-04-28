"use server"
export const deleteCustomerAction = async(customerId) =>{
    const customer = await deleteCustomer(customerId);
}