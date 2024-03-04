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

export async function deleteRequest(url: string) {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to delete vehicle");
  }
}

export async function serverRequest({ url, method, body }: RequestProps) {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
}
