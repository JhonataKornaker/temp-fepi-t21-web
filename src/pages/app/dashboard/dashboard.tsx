import { Helmet } from 'react-helmet-async'

import { TotalAthletesCard } from './total-athletes-card'
import { TotalAnamneses } from './total-anamneses-card'
import { AverageAthletesAgeCard } from './average-athletes-age-card'
import { TotalGuardiansCard } from './total-parents-athletes-card'

import { AthletesChart } from './athletes-charts'
import { AthletesSexuality } from './athletes-sexuality'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <div className="space-y-2 mb-3">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-base text-slate-400">
            Visualize as informações gerais dos seus atletas.
          </p>
        </div>

        <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[492px]:grid-cols-1 gap-4">
          <TotalAthletesCard />
          <TotalAnamneses />
          <AverageAthletesAgeCard />
          <TotalGuardiansCard />
        </div>

        <div className="grid lg:grid-cols-9 max-[1100px]:grid-cols-1 gap-4">
          <AthletesChart />
          <AthletesSexuality />
        </div>
      </div>
    </>
  )
}
