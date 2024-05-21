import React, { useState, useEffect } from 'react'
import { ResponsiveBar } from '@nivo/bar';
// import Chart from "react-apexcharts";

const Charts = () => {

  const data = [
    { id: 'أولى', value: 10 },
    { id: 'ثانية', value: 20 },
    { id: 'ثالثة', value: 30 },
    { id: 'رابعة', value: 40 },
    { id: 'خامسة', value: 40 },
  ];

  // const [chartHeight, setChartHeight] = useState(0);
  // const [chartWidth, setChartWidth] = useState(0);

  // console.log('ww', chartHeight, chartWidth)

  //   const handleResize = () => {
  //       let newWidth, newHeight;
    
  //       if (window.innerWidth >= 1250) {
  //         newWidth = 1250;
  //         newHeight = 500;
  //       }else if (window.innerWidth >= 1000){
  //           newWidth = 1000;
  //           newHeight = 400;
  //           setChartWidth(newWidth);
  //           setChartHeight(newHeight);
  //     }else if (window.innerWidth >= 760){
  //       newWidth = 750;
  //       newHeight = 400;
  //       setChartWidth(newWidth);
  //       setChartHeight(newHeight);
  // }else if (window.innerWidth >= 640){
  //       newWidth = 580;
  //       newHeight = 400;
  //       setChartWidth(newWidth);
  //       setChartHeight(newHeight);
  //     }else{
  //       newWidth = 400;
  //       newHeight = 300;
  //       setChartWidth(newWidth);
  //       setChartHeight(newHeight);
  //     }
  // };
    
  //     useEffect(() => {
  //       handleResize();
  //       window.addEventListener("resize", handleResize);
  //       return () => {
  //         window.removeEventListener("resize", handleResize);
  //       };
  //     }, []);

  //   const [options] = useState({
  //       chart: {
  //         type: 'bar',
  //       },
  //           plotOptions: {
  //     bar: {
  //       columnWidth: '35%',
  //       borderRadius: 12,
  //        // Adjust the width of the columns here
  //     },
  //   },
  //   dataLabels: {
  //       enabled: false
  //     },
  //      colors: ['#27374d'],
  //       xaxis: {
  //         categories: ['سنة أولى', 'سنة ثانية', 'سنة ثالثة', 'سنة رابعة', 'سنة خامسة'],
  //         title: {
  //           text: 'السنوات'
  //         }
  //       },
  //       yaxis: {
  //           title: {
  //             text: 'عدد الطلاب'
  //           }
  //         }
  //     });
    
  //     const [series] = useState([{
  //       name: 'الطلاب',
  //       data: [30, 40, 45, 50, 49],
  //     }]);

  //     const optionsDount = {
  //       chart: {
  //         type: 'donut',
  //       },
  //       dataLabels: {
  //           enabled: false
  //         },
  //       labels: ['سنة أولى', 'سنة ثانية', 'سنة ثالثة', 'سنة رابعة', 'سنة خامسة'],
  //       colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560','#6D3F5B'],
  //       legend: {
  //         show: true,
  //         position: 'bottom',
  //       },
  //     };
    
  //     const seriesDount = [44, 55, 13, 43, 12];
  // return (
  //   <div className='w-[100%] h-[100%] flex justify-center items-center'>
  //        <Chart
  //           options={window.innerWidth >= 640 ? options : optionsDount}
  //           series={window.innerWidth >= 640 ? series : seriesDount}
  //           type={window.innerWidth >= 640 ? "bar" : 'pie'}
  //           width={chartWidth}
  //           height={chartHeight}
  //           className='bg-[#d4d4ef] rounded-2xl'
  //         />
  //   </div>
  // )

  return (
    <div className='bg-[#d4d4ef] rounded-2xl w-[100%] h-[100%] flex justify-center items-center'>
      <ResponsiveBar
        data={data}
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
        
        // fill={[{ match: '*', id: 'value', color: '#27374d' }]} 
        
      />
    </div>
  );
}

export default Charts