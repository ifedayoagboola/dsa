function calculateTotalSalesWithTax(arr, tax) {
  const sales =
    (arr
      .map((item) => item.price * item.quantity)
      .reduce((prev, item) => prev + item)
    )

    return sales + sales * tax/100
}

module.exports = calculateTotalSalesWithTax;
