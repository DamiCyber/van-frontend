import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../assets/styles/Income.css"

const Income = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Jan', 'Aug', 'Sep', 'Oct', 'Nov',
          new Date().toLocaleString('default', { month: 'long' }) // Current month
        ],
        datasets: [{
          label: 'Income',
          data: [4, 1.5, 3, 2.5, 1.5, 0.5], 
          backgroundColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38'], 
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5, 
            ticks: {
              stepSize: 1,
              callback: value => `$${value}k`, 
            },
          },
          x: {
            grid: {
              display: false, 
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
      }
    });

    return () => chart.destroy();
  }, []);

  return (
    <section className='pack'>
      <h1>Income</h1>

      <small>Last <b>30 Days</b></small>
      <p>$2,260</p>

      <main>
        <canvas ref={chartRef} />
      </main>
    </section>
  );
}

export default Income;
