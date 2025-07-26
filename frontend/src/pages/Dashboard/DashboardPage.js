import { useEffect, useState } from "react";
import { DashboardCard } from "../Dashboard/DashboardCard";
import { DashboardEmpty } from "../Dashboard/DashboardEmpty";
import { useTitle } from "../../hook/useTitle";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(`http://localhost:8000/orders?username=${cbid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    }

    if (token && cbid) {
      fetchOrders();
    }
  }, [token, cbid]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 text-blue-600">
          Dashboard
        </h1>
      </section>

      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {orders.length > 0 ? (
          orders.map((order) => (
            <DashboardCard key={order.id} order={order} />
          ))
        ) : (
          <div className="col-span-full">
            <DashboardEmpty />
          </div>
        )}
      </section>
    </main>
  );
};
