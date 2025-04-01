import { createFileRoute, Link } from "@tanstack/react-router";
import axios from "axios";
import React from "react";

const fetchUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export const Route = createFileRoute("/users/")({
  component: RouteComponent,
  loader: () => fetchUser(),
});

function RouteComponent() {
  const data = Route.useLoaderData();
  // console.log(data);
  return (
    <div className="grid grid-cols-2 m-3 ">
      {data.map((user) => (
        <Link
          to={"/users/$userId"}
          params={{ userId: user.id }}
          key={user.id}
          className="flex flex-col border hover:bg-gray-100 justify-center items-center "
        >
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Link>
      ))}
    </div>
  );
}
