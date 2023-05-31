import React from 'react';

const ReportCard = ({ report }) => {
  const {
    reportType,
    reportDate,
    doctorInfo,
    testDetails,
    testResults,
    attachments,
    notes,
    reportId,
    appointmentId,
  } = report;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-eswasthya-blue">
      <div className="mb-4">
        <p className="text-2xl font-bold text-gray-500 mb-2">Appointment ID: {appointmentId}</p>
      </div>
      <h2 className="text-xl font-bold mb-4">{reportType}</h2>
      <p className="text-sm text-gray-500 mb-2">Report ID: {reportId}</p>
      <p className="text-sm text-gray-500 mb-2">Report Date: {reportDate}</p>
      <p className="text-sm text-gray-500 mb-2">Doctor: {doctorInfo}</p>
      <p className="text-sm text-gray-500 mb-2">Test Details: {testDetails}</p>
      <p className="text-sm text-gray-500 mb-2">Test Results: {testResults}</p>
      {attachments && (
        <div className="mt-4">
          <h3 className="text-sm font-bold">Attachments:</h3>
          {attachments.map((attachment, index) => (
            <div key={index} className="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <a
                href={attachment.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {attachment.name}
              </a>
            </div>
          ))}
        </div>
      )}
      {notes && (
        <div className="mt-4">
          <h3 className="text-sm font-bold">Notes:</h3>
          <p className="text-sm text-gray-500">{notes}</p>
        </div>
      )}
      {/* Render the image viewer component here */}
    </div>
  );
};

const UserReports = () => {
  const userReports = [
    {
      appointmentId: 'APT001',
      reportType: 'Blood Report',
      reportDate: '2023-05-30',
      doctorInfo: 'Dr. John Doe',
      testDetails: 'Cholesterol Levels',
      testResults: 'Total Cholesterol: 200 mg/dL',
      attachments: [
        { name: 'Blood_Report.pdf', url: 'https://example.com/blood_report.pdf' },
        { name: 'Lab_Results.png', url: 'https://example.com/lab_results.png' },
      ],
      notes: 'No abnormalities found.',
      reportId: 'RPT001',
    },
    {
      appointmentId: 'APT002',
      reportType: 'X-ray',
      reportDate: '2023-05-28',
      doctorInfo: 'Dr. Jane Smith',
      testDetails: 'Chest X-ray',
      testResults: 'No significant findings.',
      attachments: [{ name: 'Chest_Xray.jpg', url: 'https://example.com/chest_xray.jpg' }],
      reportId: 'RPT002',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-eswasthya-blue font-bold mb-6">User Reports</h1>
      {userReports.map((report, index) => (
      <React.Fragment key={index}>
        <ReportCard report={report} />
        {index !== userReports.length - 1 && <div className="mb-4"></div>}
      </React.Fragment>
    ))}
    </div>
  );
};

export default UserReports;
