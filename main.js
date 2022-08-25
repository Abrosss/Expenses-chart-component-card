
(function () {
    const chart = document.getElementById('chart')
    fetch("data.json")
          .then(data => data.json())
          .then(res => {
            const bars = res
            const percents = bars.map(bar => {
                return Number(bar.amount);
              });
            const max = Math.max(...percents)
            bars.forEach(bar => {
                const container = document.createElement('div')
                const label = document.createElement('div')
                label.classList.add('label')
                label.innerText = '$' + bar.amount
                container.classList.add('bar')
                const containerFlex = document.createElement('div')
                containerFlex.classList.add('stat')
                container.appendChild(containerFlex)
                const statBar = document.createElement('div')
                statBar.classList.add('statBar')
                const percent = document.createElement('div')
                percent.classList.add('percentBar')
                percent.dataset.amount = bar.amount
                percent.addEventListener('mouseover', () => {
                    statBar.appendChild(label)
                    label.style.bottom = (percent.clientHeight + label.clientHeight +15) + 'px'
                })
                percent.addEventListener('mouseleave', () => statBar.removeChild(label))

                const barHeight = (bar.amount * 100) / max

               if(bar.amount == max) {
                percent.classList.add('max')
                percent.style.height= '100%'
               }
               percent.style.height= barHeight + '%'
                statBar.appendChild(percent)
  

                const day = document.createElement('span')
                day.classList.add('day')
                day.innerText= bar.day

                containerFlex.appendChild(statBar)
                containerFlex.appendChild(day)
                chart.appendChild(container)
                
            })
          })
    
})();



