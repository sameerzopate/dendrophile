import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import './PieChart.css'

// defaults.plugins.tooltip.enabled=false
defaults.plugins.legend.position='right'



function PieChart() {

    
    return (
        <div className='Pie-box'>
        <Pie
          data={{
            labels: ['Wet', 'Paper', 'Plastic', 'Cans'],
            datasets: [
              {
                // label: '# of votes',
                data: [59.0,14.3,12.7,14.0],
                backgroundColor: [
                  '#6CBD52',
                  '#528ABD',
                  '#FFE338',
                  '#F37676',
                  
                ],
                borderColor: [
                    '#6CBD52',
                    '#528ABD',
                    '#FFE338',
                    '#F37676',
                    
                  ],
                },
              
            ],
          }}
          height={400}
          width={600}
          options={{
            responsive:true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: { size:25 },
                        boxWidth:68,
                        boxHeight:2,
                        borderWidth: 21,
                        borderColor: "rgba(0,0,0,0)"
                    }
                
                }
                
                
            },
            
      
            
            
            
          }}
        />
      </div>
    )
}

export default PieChart
