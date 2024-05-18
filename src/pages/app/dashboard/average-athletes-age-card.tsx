import { Scale } from 'lucide-react'

import { MetricCardSkeleton } from './metrics-card-skeleton'

const data = {
  amount: 27,
  diffFromLastMonth: 0,
}

export function AverageAthletesAgeCard() {
  return (
    <div className="rounded-lg border border-slate-700 text-slate-200 shadow-sm">
      <div className="flex p-6 items-center pb-2 justify-between">
        <h3 className="tracking-tighter text-base font-semibold">
          Idade média dos atletas
        </h3>

        <Scale className="size-4 text-slate-600" />
      </div>

      <div className="p-6 pt-0 space-y-1">
        {data ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {data.amount.toLocaleString('pt-BR')}
            </span>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </div>
    </div>
  )
}
