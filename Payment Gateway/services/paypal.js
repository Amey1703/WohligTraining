import axios from "axios";

export async function generateAccessToken() {
  try {
    const response = await axios.post(
      process.env.PAYPAL_BASE_URL + "/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        auth: {
          username: process.env.PAYPAL_CLIENT_ID,
          password: process.env.PAYPAL_SECRET,
        },
      }
    );
    // console.log(response.data);
    return response.data.access_token; // Returning the access token
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    throw error; // Propagate the error upwards if needed
  }
}

export async function createOrder() {
  const accessToken = await generateAccessToken();

  const response = await axios.post(
    `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders`,
    {
      intent: "CAPTURE",
      purchase_units: [
        {
          items: [
            {
              name: "Node.js Complete Crash Course",
              description:
                "Complete Node.js course with Express.js and MongoDB.",
              quantity: "1",
              unit_amount: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          ],
          amount: {
            currency_code: "USD",
            value: "100.00",
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: "100.00",
              },
            },
          },
        },
      ],
      application_context: {
        return_url: `${process.env.BASE_URL}/complete-order`,
        cancel_url: `${process.env.BASE_URL}/cancel-order`,
        shipping_preference: "NO_SHIPPING",
        user_action: "PAY_NOW",
        brand_name: "Bewakoof.com",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  // console.log(response.data);
  return response.data.links.find((link) => link.rel === "approve").href; // Returning the order ID and link from PayPal for further processing or use in your application.
}

export async function captureOrder(orderId) {
  const accessToken = await generateAccessToken();

  const response = await fetch(
    `${process.env.PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
    return response.data;
//   console.log(response.data);
}
