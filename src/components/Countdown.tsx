import { useState, useEffect } from "react";

interface CountdownProps {
  endDate: Date;
}

const Countdown = ({ endDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [endDate]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="font-mono text-2xl font-bold">
      {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:
      {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
    </div>
  );
};

export default Countdown;
