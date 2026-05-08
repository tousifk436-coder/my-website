"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  Search,
  Calendar,
  Filter,
  ArrowLeft,
} from "lucide-react";

export default function OrdersPage() {
  const router = useRouter();

  // DEMO ORDERS
  const [orders] = useState([
    {
      id: "ORD-1001",
      date: "2026-05-01",
      status: "Delivered",
      payment: "Stripe",
      total: 1299,
      items: [
        {
          name: "Paracetamol",
          qty: 2,
          price: 299,
        },
        {
          name: "Vitamin C",
          qty: 1,
          price: 701,
        },
      ],
    },

    {
      id: "ORD-1002",
      date: "2026-05-03",
      status: "Processing",
      payment: "PayPal",
      total: 799,
      items: [
        {
          name: "Ibuprofen",
          qty: 1,
          price: 799,
        },
      ],
    },

    {
      id: "ORD-1003",
      date: "2026-05-06",
      status: "Cancelled",
      payment: "Stripe",
      total: 499,
      items: [
        {
          name: "Pain Relief Spray",
          qty: 1,
          price: 499,
        },
      ],
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.items.some((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 px-6 py-10">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">

        <button
          onClick={() => router.back()}
          className="
            flex items-center gap-2
            text-[#162555]
            hover:text-cyan-600
            transition mb-6
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>
            <h1 className="text-4xl font-extrabold text-[#162555]">
              My Orders
            </h1>

            <p className="text-slate-500 mt-2">
              Track and manage all your medicine orders
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col sm:flex-row gap-3">

            {/* SEARCH */}
            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="
                  pl-10 pr-4 py-3
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  outline-none
                  w-full sm:w-72
                  shadow-sm
                "
              />

            </div>

            {/* STATUS FILTER */}
            <div className="relative">

              <Filter
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="
                  pl-10 pr-4 py-3
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  outline-none
                  shadow-sm
                "
              >
                <option>All</option>
                <option>Delivered</option>
                <option>Processing</option>
                <option>Cancelled</option>
              </select>

            </div>

          </div>

        </div>

      </div>

      {/* ORDERS */}
      <div className="max-w-7xl mx-auto grid gap-6">

        {filteredOrders.length === 0 ? (
          <div
            className="
              bg-white
              rounded-3xl
              border border-slate-200
              p-10
              text-center
              shadow-sm
            "
          >

            <Package size={50} className="mx-auto text-slate-300 mb-4" />

            <h2 className="text-2xl font-bold text-[#162555]">
              No Orders Found
            </h2>

            <p className="text-slate-500 mt-2">
              Try changing filters or search terms
            </p>

          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="
                bg-white
                rounded-3xl
                border border-slate-200
                shadow-sm
                overflow-hidden
              "
            >

              {/* TOP */}
              <div
                className="
                  p-6
                  border-b border-slate-100
                  flex flex-col lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-5
                "
              >

                <div>

                  <h2 className="text-xl font-bold text-[#162555]">
                    {order.id}
                  </h2>

                  <div className="flex items-center gap-2 text-slate-500 mt-2">
                    <Calendar size={16} />
                    {order.date}
                  </div>

                </div>

                <div className="flex flex-wrap items-center gap-4">

                  <span
                    className={`
                      px-4 py-2 rounded-full text-sm font-semibold
                      ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {order.status}
                  </span>

                  <div className="text-right">
                    <p className="text-sm text-slate-500">
                      Total
                    </p>

                    <p className="text-2xl font-bold text-cyan-600">
                      ₹{order.total}
                    </p>
                  </div>

                </div>

              </div>

              {/* ITEMS */}
              <div className="p-6 space-y-4">

                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="
                      flex items-center justify-between
                      bg-slate-50
                      rounded-2xl
                      p-4
                    "
                  >

                    <div>
                      <h3 className="font-semibold text-[#162555]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Quantity: {item.qty}
                      </p>
                    </div>

                    <p className="font-bold text-cyan-600">
                      ₹{item.price}
                    </p>

                  </div>
                ))}

              </div>

              {/* FOOTER */}
              <div
                className="
                  px-6 py-4
                  border-t border-slate-100
                  flex flex-col sm:flex-row
                  gap-3
                "
              >

                <button
                  className="
                    px-5 py-3 rounded-2xl
                    bg-[#162555]
                    hover:bg-[#1f3477]
                    text-white
                    font-semibold
                    transition
                  "
                >
                  Track Order
                </button>

                <button
                  className="
                    px-5 py-3 rounded-2xl
                    border border-slate-200
                    hover:bg-slate-50
                    text-[#162555]
                    font-semibold
                    transition
                  "
                >
                  Download Invoice
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}