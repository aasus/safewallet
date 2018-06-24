const SAFECOIN_ENDOFERA = 77195;
const LOCKTIME_THRESHOLD = 500000000;

// TODO: tiptime != 0 && nLockTime < tiptime

module.exports = (shepherd) => {
  shepherd.safeCalcInterest = (locktime, value, height) => { // value in sats
    const timestampDiff = Math.floor(Date.now() / 1000) - locktime - 777;
    const hoursPassed = Math.floor(timestampDiff / 3600);
    const minutesPassed = Math.floor((timestampDiff - (hoursPassed * 3600)) / 60);
    const secondsPassed = timestampDiff - (hoursPassed * 3600) - (minutesPassed * 60);
    let timestampDiffMinutes = timestampDiff / 60;
    let interest = 0;

    shepherd.log(`${height} vs ${SAFECOIN_ENDOFERA}`);
    shepherd.log(`${locktime} vs ${LOCKTIME_THRESHOLD}`);

    if (height < SAFECOIN_ENDOFERA &&
        locktime >= LOCKTIME_THRESHOLD) {
      shepherd.log('safeCalcInterest =>', false);
      shepherd.log(`locktime ${locktime}`, false);
      shepherd.log(`minutes converted ${timestampDiffMinutes}`, false);
      shepherd.log(`passed ${hoursPassed}h ${minutesPassed}m ${secondsPassed}s`, false);

      // calc interest
      if (timestampDiffMinutes >= 60) {
        if (timestampDiffMinutes > 365 * 24 * 60) {
          timestampDiffMinutes = 365 * 24 * 60;
        }
        timestampDiffMinutes -= 59;

        // TODO: check if interest is > 5% yr
        // calc ytd and 5% for 1 yr
        // const hoursInOneYear = 365 * 24;
        // const hoursDiff = hoursInOneYear - hoursPassed;

       //sc interest = ((Number(value) * 0.00000001) / 10512000) * timestampDiffMinutes;
	  interest = 0;
	  shepherd.log(`interest ${interest}`, false);   //sc from true
      }
    }

    return interest;
  }

  return shepherd;
};
