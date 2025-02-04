"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { format } from "date-fns";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categoryColors = {
  salary: "#22c55e", // green-500
  freelance: "#06b6d4", // cyan-500
  investments: "#6366f1", // indigo-500
  business: "#ec4899", // pink-500
  rental: "#f59e0b", // amber-500
  "other-income": "#64748b", // slate-500
  housing: "#ef4444", // red-500
  transportation: "#f97316", // orange-500
  groceries: "#84cc16", // lime-500
  utilities: "#06b6d4", // cyan-500
  entertainment: "#8b5cf6", // violet-500
  food: "#f43f5e", // rose-500
  shopping: "#ec4899", // pink-500
  healthcare: "#14b8a6", // teal-500
  education: "#6366f1", // indigo-500
  personal: "#d946ef", // fuchsia-500
  travel: "#0ea5e9", // sky-500
  insurance: "#64748b", // slate-500
  gifts: "#f472b6", // pink-400
  bills: "#fb7185", // rose-400
  "other-expense": "#94a3b8", // slate-400
};

export function DashboardOverview({ accounts, transactions }) {
  const [selectedAccountId, setSelectedAccountId] = useState(
    accounts.find((a) => a.isDefault)?.id || accounts[0]?.id
  );

  // Filter transactions for selected account
  const accountTransactions = transactions.filter(
    (t) => t.accountId === selectedAccountId
  );

  // Get recent transactions (last 5)
  const recentTransactions = accountTransactions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  // Calculate expense breakdown for current month
  const currentDate = new Date();
  const currentMonthExpenses = accountTransactions.filter((t) => {
    const transactionDate = new Date(t.date);
    return (
      t.type === "EXPENSE" &&
      transactionDate.getMonth() === currentDate.getMonth() &&
      transactionDate.getFullYear() === currentDate.getFullYear()
    );
  });

  // Group expenses by category with colors
  const expensesByCategory = currentMonthExpenses.reduce((acc, transaction) => {
    const category = transaction.category;
    if (!acc[category]) {
      acc[category] = {
        value: 0,
        color: categoryColors[category] || "#94a3b8", // Use predefined color or fallback
      };
    }
    acc[category].value += transaction.amount;
    return acc;
  }, {});

  // Format data for pie chart
  const pieChartData = Object.entries(expensesByCategory).map(
    ([category, data]) => ({
      name: category,
      value: data.value,
      fill: data.color, // Add the color directly to the data object
    })
  );

  // Calculate the total amount of expenses for the month
  const totalExpenses = Object.values(expensesByCategory).reduce(
    (acc, data) => acc + data.value,
    0
  );

  // Custom Tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0];
      const percentage = ((value / totalExpenses) * 100).toFixed(2); // Calculate the percentage
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-2 shadow-lg">
          <p className="text-gray-200 capitalize">{name}</p>
          <p className="text-gray-300 font-medium">
            ₹{value.toFixed(2)} ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 bg-gray-950 p-4 rounded-lg">
      {/* Recent Transactions Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0 pb-4">
          <CardTitle className="text-base font-normal text-gray-100">
            Recent Transactions
          </CardTitle>
          <Select
            value={selectedAccountId}
            onValueChange={setSelectedAccountId}
          >
            <SelectTrigger className="w-full sm:w-[140px] bg-gray-800 border-gray-700 text-gray-100">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            {/* Rest of Select component remains the same */}
            <SelectContent className="bg-gray-800 border-gray-700">
              {accounts.map((account) => (
                <SelectItem
                  key={account.id}
                  value={account.id}
                  className="text-gray-100 hover:bg-gray-700"
                >
                  {account.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
        {/* Rest of Card content remains the same */}
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.length === 0 ? (
              <p className="text-center text-gray-400 py-4">
                No recent transactions
              </p>
            ) : (
              recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-100">
                      {transaction.description || "Untitled Transaction"}
                    </p>
                    <p className="text-sm text-gray-400">
                      {format(new Date(transaction.date), "PP")}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        "flex items-center",
                        transaction.type === "EXPENSE"
                          ? "text-red-400"
                          : "text-green-400"
                      )}
                    >
                      {transaction.type === "EXPENSE" ? (
                        <ArrowDownRight className="mr-1 h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                      )}
                      ₹{transaction.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Expense Breakdown Card */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-base font-normal text-gray-100 text-center">
            Monthly Expense Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-5">
          {pieChartData.length === 0 ? (
            <p className="text-center text-gray-400 py-4">
              No expenses this month
            </p>
          ) : (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    labelLine={false}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} className="capitalize" />
                  <Legend
                    formatter={(value) => (
                      <span
                        className="capitalize"
                        style={{ color: categoryColors[value] || "#94a3b8" }}
                      >
                        {value}
                      </span>
                    )}
                    payload={Object.keys(expensesByCategory) // Get all category names
                      .sort() // Sort the categories alphabetically
                      .map((category) => ({
                        value: category,
                        type: "circle", // Optional: Customize legend item shape (square, circle, etc.)
                        id: category,
                        color: categoryColors[category],
                      }))}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
