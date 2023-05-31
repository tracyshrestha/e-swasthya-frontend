import React, { useState } from 'react';

const Medication = () => {
  const [medications] = useState([
    {
      id: 1,
      name: 'Medication A',
      dosage: '10mg',
      frequency: 'Twice a day',
      startDate: '01/05/2023',
      endDate: '01/10/2023',
      instructions: 'Take with food',
      doctor: 'Dr. John Smith',
    },
    {
      id: 2,
      name: 'Medication B',
      dosage: '10mg',
      frequency: 'Once a day',
      startDate: '01/05/2023',
      endDate: 'none',
      instructions: 'Take before food',
      doctor: 'Dr. John Doe',
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4 text-eswasthya-blue">
        Current Medications
      </h2>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full text-eswasthya-blue">
          {/* Table header */}
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Medication Name
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Dosage
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Frequency
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Start Date
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                End Date
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Instructions/Notes
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Prescribing Doctor
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="divide-y divide-gray-100">
            {medications.map((medication) => (
              <tr key={medication.id} className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.name}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.dosage}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.frequency}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.startDate}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.endDate}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.instructions}
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {medication.doctor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {medications.map((medication) => (
          <div
            key={medication.id}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="text-eswasthya-blue font-semibold">
              Medication Name:
            </div>
            <div className="text-sm text-gray-700">{medication.name}</div>
            <div className="text-eswasthya-blue font-semibold">Dosage:</div>
            <div className="text-sm text-gray-700">{medication.dosage}</div>
            <div className="text-eswasthya-blue font-semibold">
              Frequency:
            </div>
            <div className="text-sm text-gray-700">{medication.frequency}</div>
            <div className="text-eswasthya-blue font-semibold">
              Start Date:
            </div>
            <div className="text-sm text-gray-700">{medication.startDate}</div>
            <div className="text-eswasthya-blue font-semibold">End Date:</div>
            <div className="text-sm text-gray-700">{medication.endDate}</div>
            <div className="text-eswasthya-blue font-semibold">
              Instructions/Notes:
            </div>
            <div className="text-sm text-gray-700">
              {medication.instructions}
            </div>
            <div className="text-eswasthya-blue font-semibold">
              Prescribing Doctor:
            </div>
            <div className="text-sm text-gray-700">{medication.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medication;
