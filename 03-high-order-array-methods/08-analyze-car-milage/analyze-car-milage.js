function analyzeCarMileage(arr) {
  let highestMileage = 0;
  let highestMileageCar = {};
  let lowestMileageCar = {};

  const totalMileage = arr.reduce((acc, car) => {
    if (car.mileage > highestMileage) {
      highestMileage = car.mileage;
      highestMileageCar = car;
    }

    if (arr[0].mileage > car.mileage) {
      lowestMileageCar = car;
    }
    return acc + car.mileage;
  }, 0);

  const averageMileage = totalMileage / arr.length;

  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
