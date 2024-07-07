document.addEventListener('DOMContentLoaded', function() {
    const computerList = document.getElementById('computerList');
    const sortBySelect = document.getElementById('sortBy');
  
    const computers = [
      { name: 'Armagedon', price: 800, description: 'Great for gaming' },
      { name: 'Blockbuster', price: 600, description: 'High performance' },
      { name: 'Cee', price: 1000, description: 'Progamming' },
      { name: 'Damnation', price: 1200, description: 'Render GOAT' },
      { name: 'Element', price: 500, description: 'Cheapest Choice' },
      { name: 'Grand', price: 1500, description: 'Our best product yet' }
    ];
  
    function renderComputers(computersArray) {
      computerList.innerHTML = '';
      computersArray.forEach(computer => {
        const computerElement = document.createElement('div');
        computerElement.classList.add('computer');
        computerElement.innerHTML = `
          <h2>${computer.name}</h2>
          <p>Price: $${computer.price}</p>
          <p>${computer.description}</p>
        `;
        computerList.appendChild(computerElement);
      });
    }
  
    renderComputers(computers);
  
    sortBySelect.addEventListener('change', function() {
      const sortBy = this.value;
      let sortedComputers = [];
      if (sortBy === 'price') {
        sortedComputers = computers.slice().sort((a, b) => a.price - b.price);
      } else if (sortBy === 'name') {
        sortedComputers = computers.slice().sort((a, b) => a.name.localeCompare(b.name));
      }
      renderComputers(sortedComputers);
    });
  });
  