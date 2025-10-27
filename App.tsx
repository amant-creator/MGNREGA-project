
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import DistrictSelector from './components/DistrictSelector';
import Dashboard from './components/Dashboard';
import { fetchDistrictData } from './services/mgnregaService';
import { type DistrictPerformanceData } from './types';
import { UTTAR_PRADESH_DISTRICTS } from './constants';

const App: React.FC = () => {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [districtData, setDistrictData] = useState<DistrictPerformanceData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDistrictChange = useCallback((districtId: string) => {
    setSelectedDistrictId(districtId);
  }, []);

  useEffect(() => {
    if (!selectedDistrictId) {
      setDistrictData(null);
      return;
    }

    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchDistrictData(selectedDistrictId);
        setDistrictData(data);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
        setDistrictData(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [selectedDistrictId]);

  const WelcomeMessage = () => (
    <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h2>
      <p className="text-lg text-gray-600">
        Please select your district from the list above to see how the MGNREGA program is performing in your area.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-6">
        <DistrictSelector
          districts={UTTAR_PRADESH_DISTRICTS}
          selectedDistrictId={selectedDistrictId}
          onDistrictChange={handleDistrictChange}
          disabled={isLoading}
        />
        <div className="mt-6">
          {isLoading && (
            <div className="text-center text-xl text-blue-600">Loading data...</div>
          )}
          {error && (
            <div className="text-center text-xl text-red-600 bg-red-100 p-4 rounded-lg">{error}</div>
          )}
          {!isLoading && !error && !districtData && <WelcomeMessage />}
          {!isLoading && !error && districtData && (
            <Dashboard data={districtData} />
          )}
        </div>
      </main>
      <footer className="text-center p-4 mt-8 text-gray-500 text-sm">
        <p>Our Voice, Our Rights | Data provided for Uttar Pradesh (Simulated)</p>
      </footer>
    </div>
  );
};

export default App;
