
import { type DistrictPerformanceData } from '../types';

const MOCK_DATA: Record<string, DistrictPerformanceData> = {
  agra: {
    id: 'agra',
    name: 'Agra',
    currentState: {
      personsEmployed: 125000,
      personDaysGenerated: 45.5,
      averageWage: 215,
      fundsSpent: 97.8,
    },
    previousState: {
      personsEmployed: 110000,
      personDaysGenerated: 42.1,
      averageWage: 212,
      fundsSpent: 89.2,
    },
    monthlyTrend: [
      { month: 'Jan', personDaysGenerated: 40.2, personsEmployed: 105000, averageWage: 210 },
      { month: 'Feb', personDaysGenerated: 43.1, personsEmployed: 115000, averageWage: 211 },
      { month: 'Mar', personDaysGenerated: 42.5, personsEmployed: 112000, averageWage: 213 },
      { month: 'Apr', personDaysGenerated: 45.5, personsEmployed: 125000, averageWage: 215 },
    ],
    summary: "This month, more people found work compared to last month. The government also spent more money on providing jobs in your district."
  },
  lucknow: {
    id: 'lucknow',
    name: 'Lucknow',
    currentState: {
      personsEmployed: 98000,
      personDaysGenerated: 38.2,
      averageWage: 220,
      fundsSpent: 84.0,
    },
    previousState: {
      personsEmployed: 105000,
      personDaysGenerated: 40.0,
      averageWage: 218,
      fundsSpent: 87.2,
    },
    monthlyTrend: [
      { month: 'Jan', personDaysGenerated: 41.5, personsEmployed: 108000, averageWage: 215 },
      { month: 'Feb', personDaysGenerated: 40.0, personsEmployed: 105000, averageWage: 218 },
      { month: 'Mar', personDaysGenerated: 39.1, personsEmployed: 101000, averageWage: 219 },
      { month: 'Apr', personDaysGenerated: 38.2, personsEmployed: 98000, averageWage: 220 },
    ],
    summary: "This month, fewer people found work compared to last month. The daily wage has slightly increased."
  },
  varanasi: {
    id: 'varanasi',
    name: 'Varanasi',
    currentState: {
      personsEmployed: 150000,
      personDaysGenerated: 55.0,
      averageWage: 210,
      fundsSpent: 115.5,
    },
    previousState: {
      personsEmployed: 148000,
      personDaysGenerated: 54.2,
      averageWage: 211,
      fundsSpent: 114.3,
    },
    monthlyTrend: [
      { month: 'Jan', personDaysGenerated: 52.0, personsEmployed: 140000, averageWage: 208 },
      { month: 'Feb', personDaysGenerated: 53.5, personsEmployed: 145000, averageWage: 209 },
      { month: 'Mar', personDaysGenerated: 54.2, personsEmployed: 148000, averageWage: 211 },
      { month: 'Apr', personDaysGenerated: 55.0, personsEmployed: 150000, averageWage: 210 },
    ],
    summary: "The number of people getting work has remained steady with a small increase this month. The daily wage has seen a small decrease."
  },
   prayagraj: {
    id: 'prayagraj',
    name: 'Prayagraj',
    currentState: {
      personsEmployed: 180000,
      personDaysGenerated: 62.1,
      averageWage: 218,
      fundsSpent: 135.3,
    },
    previousState: {
      personsEmployed: 165000,
      personDaysGenerated: 58.9,
      averageWage: 216,
      fundsSpent: 127.2,
    },
    monthlyTrend: [
      { month: 'Jan', personDaysGenerated: 57.0, personsEmployed: 160000, averageWage: 214 },
      { month: 'Feb', personDaysGenerated: 58.9, personsEmployed: 165000, averageWage: 216 },
      { month: 'Mar', personDaysGenerated: 60.5, personsEmployed: 172000, averageWage: 217 },
      { month: 'Apr', personDaysGenerated: 62.1, personsEmployed: 180000, averageWage: 218 },
    ],
    summary: "Performance has improved significantly this month, with many more people getting work and an increase in wages. More funds were spent."
  },
};

export const fetchDistrictData = (districtId: string): Promise<DistrictPerformanceData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_DATA[districtId];
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Data for this district is not available. Please try another.'));
      }
    }, 500 + Math.random() * 500); // Simulate network delay
  });
};
