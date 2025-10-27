
export interface MonthlyData {
  month: string;
  personsEmployed: number;
  personDaysGenerated: number; // in lakhs
  averageWage: number; // in INR
}

export interface District {
  id: string;
  name: string;
}

export interface DistrictPerformanceData {
  id: string;
  name: string;
  currentState: {
    personsEmployed: number;
    personDaysGenerated: number;
    averageWage: number;
    fundsSpent: number; // in Crores
  };
  previousState: {
    personsEmployed: number;
    personDaysGenerated: number;
    averageWage: number;
    fundsSpent: number;
  };
  monthlyTrend: MonthlyData[];
  summary: string;
}
