import { getDashboardData, getUserAccounts } from '@/actions/dashboard';
import CreateAccountDrawer from '@/components/create-account-drawer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React, { Suspense } from 'react'
import { AccountCard } from './_components/account-card';
import { getCurrentBudget } from '@/actions/budget';
import BudgetProgress from './_components/budget-progress';
import { DashboardOverview } from './_components/transactions-overview';

async function DashboardPage() {
  const accounts = await getUserAccounts();

  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  const transactions = await getDashboardData();


  return (<div className='space-y-8 px-5 animate-in fade-in duration-700 delay-200'>

    {/* Budget Progress */}
    {defaultAccount && <div className="animate-in slide-in-from-bottom duration-700 delay-300 rounded-lg border border-blue-200 p-4 bg-blue-50">
      <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />
    </div>}
 
    {/* Overview */}
    <div className="animate-in slide-in-from-bottom duration-700 delay-500 rounded-lg border border-gray-600 p-4 bg-gradient-to-r from-sky-100 to-pink-100">
      <Suspense fallback={<div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>}>
        <DashboardOverview
          accounts={accounts}
          transactions={transactions || []}
        />
      </Suspense>
    </div>

    {/* Accounts grid */}
    <div className="rounded-lg border border-purple-200 p-8 bg-purple-50">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in slide-in-from-bottom duration-700 delay-700">
        <CreateAccountDrawer>
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-dashed hover:scale-[1.02] hover:border-purple-400 bg-white">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-6">
              <Plus className="h-12 w-12 mb-3 text-purple-500" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 &&
          accounts?.map((account) => (
            <div key={account.id} className="transition-all duration-300 hover:scale-[1.02]">
              <AccountCard account={account} />
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}
export default DashboardPage;