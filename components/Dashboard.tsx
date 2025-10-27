
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { type DistrictPerformanceData } from '../types';
import Card from './Card';
import SpeakerIcon from './SpeakerIcon';

interface DashboardProps {
  data: DistrictPerformanceData;
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const formatNumber = (num: number) => new Intl.NumberFormat('en-IN').format(num);

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800">
                Performance Summary for {data.name}
            </h2>
            <SpeakerIcon textToSpeak={`Performance Summary for ${data.name}. ${data.summary}`} />
        </div>
        <p className="text-lg text-gray-600 mt-2">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="People Employed"
          value={formatNumber(data.currentState.personsEmployed)}
          previousValue={data.previousState.personsEmployed}
          description="Total people who got work"
        />
        <Card
          title="Work Days Generated"
          value={`${data.currentState.personDaysGenerated} Lakh`}
          previousValue={data.previousState.personDaysGenerated}
          description="Total days of work provided"
        />
        <Card
          title="Average Daily Wage"
          value={`₹ ${data.currentState.averageWage}`}
          previousValue={data.previousState.averageWage}
          description="Average money earned per day"
        />
        <Card
          title="Funds Spent"
          value={`₹ ${data.currentState.fundsSpent} Cr`}
          previousValue={data.previousState.fundsSpent}
          description="Total money spent on the program"
        />
      </div>

      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Monthly Trend (Work Days Generated)</h3>
             <SpeakerIcon textToSpeak={`Monthly Trend for Work Days Generated.`} />
        </div>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              data={data.monthlyTrend}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} label={{ value: 'Work Days (in Lakhs)', angle: -90, position: 'insideLeft', offset: 10, style: {textAnchor: 'middle'} }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '16px',
                }}
                formatter={(value: number) => [`${value} Lakh`, 'Work Days']}
              />
              <Legend wrapperStyle={{fontSize: "16px"}}/>
              <Bar dataKey="personDaysGenerated" fill="#4ade80" name="Work Days Generated" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
