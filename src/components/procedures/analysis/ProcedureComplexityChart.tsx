
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ProcedureMetrics {
  id: string;
  name: string;
  averageTime: number;
  steps: number;
  documents: number;
  administrations: number;
  cost: number;
  complexityScore: number;
  successRate: number;
  userSatisfaction: number;
  feedbackCount: number;
  trends: {
    timeChange: number;
    satisfactionChange: number;
  };
}

interface ProcedureComplexityChartProps {
  procedures: ProcedureMetrics[];
}

export function ProcedureComplexityChart({ procedures }: ProcedureComplexityChartProps) {
  const chartData = procedures.map(p => ({
    name: p.name.length > 15 ? p.name.substring(0, 15) + '...' : p.name,
    complexité: p.complexityScore,
    délai: p.averageTime / 5, // Normalisé pour l'affichage
    étapes: p.steps / 2,
    documents: p.documents,
    administrations: p.administrations * 2
  }));

  const getBarColor = (value: number) => {
    if (value <= 3) return '#10b981'; // vert
    if (value <= 6) return '#f59e0b'; // jaune
    if (value <= 8) return '#f97316'; // orange
    return '#ef4444'; // rouge
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [value, name]}
            labelFormatter={(label) => `Procédure: ${label}`}
          />
          <Bar dataKey="complexité" name="Score de Complexité">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.complexité)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
