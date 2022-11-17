// const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;

// function dateSample(sampleActivity) {
//   if (typeof sampleActivity !== "string") {
//     return false;
//   }

//   const activity = Number(sampleActivity);
//   const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / DECAY);

//   if (MODERN_ACTIVITY < activity
//     || isNaN(activity)
//     || activity <= 0
//   ) {
//     return false;
//   }

//   return age;
// };

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  let answer = false;

  if (typeof(sampleActivity) === 'string'){
      let numSampleActivity = parseFloat(sampleActivity);

      if (numSampleActivity < MODERN_ACTIVITY && numSampleActivity > 0){
          const t = Math.log(MODERN_ACTIVITY / numSampleActivity) / (0.693 / HALF_LIFE_PERIOD);
          answer = Math.ceil(t);
      }
  }
  return answer;
}




console.log(dateSample('1'));  //    => 22387
console.log(dateSample('WOOT!'));    // => false


