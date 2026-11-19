import React, { useEffect, useState } from "react";
// import api from "../../services/userService"; 

const CustomerDashboardCards = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerStats = async () => {
      try {
        setLoading(true);
        // Replace '/customers/dashboard-summary' with your actual backend endpoint
        const response = await api.get("/customers/dashboard-summary");
        setMetrics(response.data);
      } catch (err) {
        console.error("Failed to fetch customer metrics:", err);
        setError("Unable to load customer statistics.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-xl border border-slate-200 bg-slate-100 p-6"
          />
        ))}
      </div>
    );
  }

  if (error || !metrics) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
        {error || "No customer data available."}
      </div>
    );
  }

  // Calculate occupancy percentage for Card 2's progress bar
  const occupancyPercentage =
    metrics.totalRoomCapacity > 0
      ? Math.round((metrics.activeCheckedInGuests / metrics.totalRoomCapacity) * 100)
      : 0;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* CARD 1: Total Registered Users (Classic Trend Card) */}
      <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">Total Customers</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl font-bold text-slate-900">
            {metrics.totalRegisteredCustomers?.toLocaleString() ?? 0}
          </h3>
          <div className="mt-2 flex items-center text-xs">
            <span
              className={`font-semibold ${
                metrics.customerGrowthPercentage >= 0 ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {metrics.customerGrowthPercentage >= 0 ? "+" : ""}
              {metrics.customerGrowthPercentage}%
            </span>
            <span className="ml-1.5 text-slate-400">vs last month</span>
          </div>
        </div>
      </div>

      {/* CARD 2: Currently Checked-In Guests (Capacity Progress Bar Card) */}
      <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">Checked-In Guests</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-3xl font-bold text-slate-900">
              {metrics.activeCheckedInGuests ?? 0}
            </h3>
            <span className="text-xs font-medium text-slate-500">
              {occupancyPercentage}% Occupancy
            </span>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${Math.min(occupancyPercentage, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* CARD 3: VIP & Loyalty Members (Split Breakdown Card) */}
      <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">VIP & New Signups</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 divide-x divide-slate-200">
          <div className="pr-3">
            <p className="text-2xl font-bold text-slate-900">
              {metrics.vipLoyaltyMembers ?? 0}
            </p>
            <p className="mt-1 text-xs text-slate-500">VIP Tier</p>
          </div>
          <div className="pl-4">
            <p className="text-2xl font-bold text-indigo-600">
              +{metrics.newSignupsThisMonth ?? 0}
            </p>
            <p className="mt-1 text-xs text-slate-500">New This Month</p>
          </div>
        </div>
      </div>

      {/* CARD 4: Guest Satisfaction Rating (Accent Dark Card) */}
      <div className="flex flex-col justify-between rounded-xl bg-slate-900 p-6 text-white shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-300">Guest Satisfaction</span>
          <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-amber-400">
            ★ Top Rated
          </span>
        </div>
        <div className="mt-4">
          <div className="flex items-baseline gap-1.5">
            <h3 className="text-3xl font-bold tracking-tight">
              {Number(metrics.averageSatisfactionScore || 0).toFixed(1)}
            </h3>
            <span className="text-sm text-slate-400">/ 5.0</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Based on{" "}
            <span className="font-semibold text-slate-200">
              {metrics.totalReviewsCount ?? 0}
            </span>{" "}
            verified guest reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboardCards;




// export default function CustomerDashboardCards(){
//     return(
//         <>
//         Customer Dashboard Cards
//         </>
//     );
// }