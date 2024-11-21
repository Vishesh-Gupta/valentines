import React, { useEffect, useState } from 'react';

const Countdown: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [countdown, setCountdown] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const timeDifference = targetDate.getTime() - new Date().getTime();
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 3600 * 24));
        const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
        const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown(null); // Countdown finished
      }
    };

    updateCountdown(); // Initial call
    const intervalId = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [targetDate]);

  return (
    <div style={{ color: 'black' }}>
      {countdown ? (
        <div>
          Countdown to {targetDate.toLocaleString()}: {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
        </div>
      ) : (
        <div>Countdown has finished or is not available.</div>
      )}
    </div>
  );
};

export default Countdown;
