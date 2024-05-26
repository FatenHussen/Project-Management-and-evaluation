import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Charts = ({ students }) => {
  // Function to aggregate students data by academic year
  const aggregateDataByYear = (students) => {
    const yearCounts = {};

    students.forEach(student => {
      const year = student.academic_year_id;
      if (year) {
        if (!yearCounts[year]) {
          yearCounts[year] = 0;
        }
        yearCounts[year]++;
      }
    });

    return Object.keys(yearCounts).map(year => ({
      id: year,
      value: yearCounts[year]
    }));
  };

  // Aggregated data for the chart
  const chartData = aggregateDataByYear(students);

  return (
    <div className='bg-[#d4d4ef] rounded-2xl w-[100%] h-[100%] flex justify-center items-center'>
      <ResponsiveBar
        data={chartData}
        keys={['value']}
        indexBy="id"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'category10' }}  
        borderRadius={10}
        labelSkipWidth={12}
        labelSkipHeight={12}
        enableLabel={false}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'السنوات',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'عدد الطلاب',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}

export default Charts;
