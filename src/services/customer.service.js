// Get all customer
export const getAllCustomerService = async () => {
  const res = await fetch(
    "https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer",

    { next: { tags: ["customer"] } }
  );
  // convert json to javascript value
  const data = await res.json();
  return data;
};

// insert customer service
export const insertCustomerService = async (newCustomer) => {
  console.log("a a ", newCustomer);
  const res = await fetch(
    "https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer",

    // post
    {
      method: "POST",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-type": "Application/json",
      },
    }
  );
  const data = res.json();
  return data;
};

export const deleteCustomerService = async (customerId) => {
  console.log(customerId);
  const res = await fetch(
    `https://655c2c57ab37729791a9f8b0.mockapi.io/api/customer/${customerId}`,
    {
      method: "DELETE",
      body : JSON.stringify({id : customerId}),
      headers: {
        "Content-type": "Application/json",
      },
    }
  );
  console.log("Delete success" + res)
};
