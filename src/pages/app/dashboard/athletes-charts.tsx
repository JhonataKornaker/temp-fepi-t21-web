import { BarChart, Loader2 } from 'lucide-react'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from 'recharts'

import colors from 'tailwindcss/colors'

const data = [
  { date: '10/12', athletes: 1200 },
  { date: '11/12', athletes: 800 },
  { date: '12/12', athletes: 900 },
  { date: '13/12', athletes: 400 },
  { date: '14/12', athletes: 2300 },
  { date: '15/12', athletes: 800 },
  { date: '16/12', athletes: 640 },
  { date: '16/12', athletes: 800 },
  { date: '16/12', athletes: 800 },
]

export function AthletesChart() {
  return (
    <div className="col-span-6 max-[1100px]:col-span-full">
      <div className="rounded-lg border border-slate-700 text-slate-200 shadow-sm">
        <div className="flex p-6 items-center pb-2 justify-between">
          <h3 className="tracking-tighter text-base font-semibold">
            Agendamentos realizados por mês
          </h3>

          <BarChart className="size-4 text-slate-600" />
        </div>

        <div className="p-8 pl-0 pt-4 space-y-1">
          {data ? (
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={data} style={{ fontSize: 12 }}>
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  dy={16}
                />

                <YAxis
                  stroke="#888"
                  axisLine={false}
                  tickLine={false}
                  width={80}
                />

                <CartesianGrid vertical={false} className="stroke-slate-700" />

                <Line
                  stroke={colors.lime[500]}
                  type="linear"
                  strokeWidth={2}
                  dataKey="athletes"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2 className="size-8 animate-spin text-slate-700" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
