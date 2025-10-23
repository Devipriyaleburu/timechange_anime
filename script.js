const clock = document.getElementById('clock');

// 7-segment positions (x, y) for each segment
const segments = [
  [1, 0], [2, 1], [2, 3], [1, 4], [0, 3], [0, 1], [1, 2]
];

// Digit patterns (1 = segment ON)
const digits = {
  0: [1,1,1,1,1,1,0],
  1: [0,1,1,0,0,0,0],
  2: [1,1,0,1,1,0,1],
  3: [1,1,1,1,0,0,1],
  4: [0,1,1,0,0,1,1],
  5: [1,0,1,1,0,1,1],
  6: [1,0,1,1,1,1,1],
  7: [1,1,1,0,0,0,0],
  8: [1,1,1,1,1,1,1],
  9: [1,1,1,1,0,1,1]
};

// Create 28 car divs (4 digits × 7 segments)
let cars = [];
for (let i = 0; i < 28; i++) {
  const car = document.createElement('div');
  car.className = 'car';
  clock.appendChild(car);
  cars.push(car);
}

function updateClock() {
  const time = new Date();
  const digitsArray = [
    Math.floor(time.getHours() / 10),
    time.getHours() % 10,
    Math.floor(time.getMinutes() / 10),
    time.getMinutes() % 10
  ];

  digitsArray.forEach((digit, i) => {
    const pattern = digits[digit];
    pattern.forEach((on, j) => {
      const car = cars[i * 7 + j];
      if (on) {
        const [x, y] = segments[j];
        car.style.left = `${i * 130 + x * 25 + 100}px`;
        car.style.top = `${y * 30 + 30}px`;
        car.style.opacity = 1;
      } else {
        car.style.opacity = 0;
      }
    });
  });
}

updateClock();
setInterval(updateClock, 1000);
