"use server";

//----------------------------------------------GET request-------------------------
export async function getShipments() {
  const res = await fetch(`https://api.shipengine.com/v1/carriers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.NEXT_PUBLIC_SHIPMENT_API_KEY as string,
    },
  });

  const data = await res.json();

  return data;
}

// --------------------------------------------POST Request--------------------------

interface data {
  to_name: string;
  to_phone: string;
  to_address: string;
  to_city:string;
  
  from_name: string;
  from_company: string;
  from_address: string;
  from_phone: string;

  weight: number;
  height:number;
  width:number;
  length:number;
}
export async function postRequest(item: data) {
  try {
    const res = await fetch(`https://api.shipengine.com/v1/labels`, {
      method: "POST",
      headers: {
        "API-Key": process.env.NEXT_PUBLIC_SHIPMENT_API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shipment: {
          carrier_id: "se-1862562",
          service_code: "usps_priority_mail_Express",
          ship_to: {
            name: item.to_name,
            phone: item.to_phone,
            address_line1: item.to_address,
            city_locality: item.to_city,
            state_province: "CA",
            postal_code: "95128",
            country_code: "US",
            address_residential_indicator: "yes",
          },
          ship_from: {
            name: item.from_name,
            company_name: item.from_company,
            phone: item.from_phone,
            address_line1: item.from_address,
            city_locality: "Austin",
            state_province: "TX",
            postal_code: "78731",
            country_code: "US",
            address_residential_indicator: "no",
          },
          packages: [
            {
              weight: { value: item.weight, unit: "ounce" },
              dimensions: {
                height: item.height,
                width: item.width,
                length: item.length,
                unit: "inch",
              },
            },
          ],
        },
      }),
    });

    if (!res.ok) {
      console.error("Error:", res.statusText);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Request Failed:", error);
    return null;
  }
}
