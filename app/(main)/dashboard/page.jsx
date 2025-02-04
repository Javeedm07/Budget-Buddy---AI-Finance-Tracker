// "use client";

import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";
import { BarLoader } from "react-spinners";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8 p-6 bg-gray-950">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <Suspense fallback={<BarLoader />}>
        <div className="relative space-y-8 animate-fadeIn">
          {/* Budget Progress */}
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <BudgetProgress
              initialBudget={budgetData?.budget}
              currentExpenses={budgetData?.currentExpenses || 0}
            />
          </div>

          {/* Dashboard Overview */}
          <div className="transform hover:scale-[1.01] transition-transform duration-300">
            <DashboardOverview
              accounts={accounts}
              transactions={transactions || []}
            />
          </div>

          {/* Accounts Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CreateAccountDrawer>
              <Card
                className="hover:shadow-lg hover:shadow-blue-500/10 
                         transition-all duration-300 cursor-pointer 
                         border-dashed border-gray-700 bg-gray-900/50 
                         backdrop-blur-sm group"
              >
                <CardContent className="flex flex-col items-center justify-center text-gray-400 h-full pt-5">
                  <Plus className="h-10 w-10 mb-2 group-hover:rotate-90 transition-transform duration-300" />
                  <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                    Add New Account
                  </p>
                </CardContent>
              </Card>
            </CreateAccountDrawer>

            {accounts.length > 0 &&
              accounts?.map((account) => (
                <div
                  key={account.id}
                  className="transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <AccountCard account={account} />
                </div>
              ))}
          </div>

          {/* Empty state for no accounts */}
          {accounts.length === 0 && (
            <div className="text-center text-gray-400 mt-8 animate-fadeIn">
              <p>
                No accounts found. Create your first account to get started!
              </p>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
}
