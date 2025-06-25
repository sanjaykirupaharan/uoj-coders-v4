import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central">
      {`${universityTeams[index].name} - ${universityTeams[index].teams}`}
    </text>
  );
};

export default function EliminationRound() {
  return (
    <div
      className="bg-neutral-950 w-full relative py-12 overflow-hidden mx-auto"
      id="elimination">
      <div className="mt-5 space-y-5 text-center text-white">
        <h1 className="mt-5 font-varino text-2xl lg:text-4xl text-center font-bold text-white uppercase tracking-widest">
          Elimination Round
        </h1>
        <h3 className="pt-5 text-base lg:text-xl font-medium">
          Thank you for all the teams eagerly registered for the UoJCoders v3.0
        </h3>
        <p className="text-base lg:text-xl font-medium">
          100+ teams have participated for elimination round!
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center mt-10">
        <div className="w-11/12 lg:w-1/2 h-[300px] lg:h-[500px] mx-auto mt-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={100} height={100}>
              <Pie
                data={universityTeams}
                cx={"50%"}
                cy={"50%"}
                innerRadius={"40%"}
                outerRadius={"80%"}
                // fill="#8884d8"
                label={true}
                paddingAngle={0}
                animationEasing="ease-in-out"
                dataKey="teams">
                {universityTeams.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="ml-10 lg:ml-0 w-11/12 lg:w-5/12 mx-auto flex flex-col items-start justify-center mt-5 space-y-5 text-white">
          {universityTeams.map((team, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div
                className="w-5 h-5 rounded-sm"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />
              <span className="text-sm lg:text-base font-light">
                {team.name} - {team.teams}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const universityTeams = [
  { name: "University of Jaffna", teams: 51 },
  { name: "University of Moratuwa", teams: 30 },
  { name: "Sri Lanka Institute of Information Technology", teams: 8 },
  { name: "University of Peradeniya", teams: 7 },
  { name: "Northern Uni", teams: 5 },
  { name: "University of Sri Jayewardenepura", teams: 4 },
  { name: "University of Kelaniya", teams: 3 },
  { name: "University of Ruhuna", teams: 3 },
  { name: "University of Vavuniya", teams: 3 },
  { name: "Uva Wellassa University of Sri Lanka", teams: 2 },
  { name: "Rajarata University of Sri Lanka", teams: 2 },
  { name: "Informatics Institute of Technology | IIT Campus", teams: 2 },
  { name: "Others", teams: 9 },
];

const COLORS = [
  "#E0F7FA", // Very light blue
  "#B2EBF2", // Light blue
  "#81DEEA", // Light cyan
  "#4DD0E1", // Cyan
  "#26C6DA", // Moderate cyan
  "#00BCD4", // Strong cyan
  "#00ACC1", // Dark cyan
  "#0097A7", // Deep blue-cyan
  "#00838F", // Dark blue-cyan
  "#006064", // Very dark cyan
  "#004D55", // Dark cyan-blue
  "#003B45", // Very dark blue-cyan
  "#002A34", // Deep, almost black-blue
];
