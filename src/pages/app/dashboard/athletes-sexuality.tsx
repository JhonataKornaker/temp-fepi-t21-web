import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'

import { BarChart, Loader2Icon } from 'lucide-react'

import colors from 'tailwindcss/colors'

const COLORS = [
  colors.lime[500],
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.rose[500],
]

const data = [
  { sexuality: 'Destro', amount: 10 },
  { sexuality: 'Canhoto', amount: 48 },
]

export function AthletesSexuality() {
  return (
    <div className="col-span-3">
      <div className="rounded-lg border border-slate-700 text-slate-200 shadow-sm">
        <div className="flex p-6 items-start pb-2 justify-between">
          <div className="space-y-1">
            <h3 className="tracking-tighter text-base font-semibold">
              Atletas dos Sexo:
            </h3>

            <p className="text-sm text-slate-400">
              Esse é um gráfico que mostra o sexo dos atletas
            </p>
          </div>

          <BarChart className="size-4 text-slate-600" />
        </div>

        <div className="p-6 pt-0 space-y-1">
          {data ? (
            <ResponsiveContainer width="100%" height={240}>
              <PieChart style={{ fontSize: 12 }}>
                <Pie
                  data={data}
                  dataKey="amount"
                  nameKey="sexuality"
                  cx="50%"
                  cy="50%"
                  outerRadius={86}
                  innerRadius={64}
                  strokeWidth={8}
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180
                    const radius =
                      12 + innerRadius + (outerRadius - innerRadius)
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)

                    return (
                      <text
                        x={x}
                        y={y}
                        className="fill-slate-300 text-xs"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                      >
                        {data[index].sexuality.length > 12
                          ? data[index].sexuality.substring(0, 12).concat('...')
                          : data[index].sexuality}{' '}
                        ({value})
                      </text>
                    )
                  }}
                >
                  {data.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="stroke-slate-900 hover:opacity-80"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-[240px] w-full items-center justify-center">
              <Loader2Icon className="size-8 animate-spin text-slate-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
