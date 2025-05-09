// CountdownTimer.js
import React, { useEffect, useState } from 'react';
import { interval, takeWhile, map } from 'rxjs';

function CountdownTimer({ start = 1000 }) {
  const [timeLeft, setTimeLeft] = useState(start);

  useEffect(() => {
    // Create a stream that emits a value every 1 second
    const countdown$ = interval(1000).pipe(
      map((i) => start - i),            // Convert ticks to countdown values
      takeWhile((value) => value >= 0)  // Stop when value is below 0
    );

    const subscription = countdown$.subscribe((val) => {
      setTimeLeft(val);                 // Update React state with the value
    });

    return () => subscription.unsubscribe(); // Clean up on unmount
  }, [start]);

  return (
    <h1>
      {timeLeft > 0 ? `Countdown unitl sale is over: ${timeLeft} minutes` : "Time's up!"}
    </h1>
  );
}

export default CountdownTimer;
