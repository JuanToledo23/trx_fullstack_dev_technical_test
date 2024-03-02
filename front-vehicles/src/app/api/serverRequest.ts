type RequestProps = {
  url: string;
  method?: string;
  body?: Object;
};
export async function fetchRequest(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function serverRequest({
  url,
  method = "GET",
  body,
}: RequestProps) {
  console.log(url, method, body);
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: body ? JSON.stringify(body) : "",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// export async function putServerRequest({url, body}: RequestProps ) {
//   const res = await fetch(url, {
//     method: "PUT",
//     body: JSON.stringify(body)
//   })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }
