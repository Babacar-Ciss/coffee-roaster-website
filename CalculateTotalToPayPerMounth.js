function CalculateTotalToPayPerMounth(weight, frequency) {
    let Total = 0
  
    if (frequency === 'Every month') {
      if (weight === '250g') {
        Total = 12
      } else if (weight === '500g') {
        Total = 22
      } else {
        Total = 42
      }
    }
  
    if (frequency === 'Every 2 weeks') {
      if (weight === '250g') {
        Total = 9.6 * 2
      } else if (weight === '500g') {
        Total = 17.5 * 2
      } else {
        Total = 32 * 2
      }
    }
  
    if (frequency === 'Every week') {
      if (weight === '250g') {
        Total = 7.2 * 4
      } else if (weight === '500g') {
        Total = 13 * 4
      } else {
        Total = 22 * 4
      }
    }
  
    return Total
  }

export default CalculateTotalToPayPerMounth