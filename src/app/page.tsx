'use client';
import { useState, useEffect } from 'react';
import { CACHE_ONE_YEAR } from "next/dist/lib/constants";
import Image from "next/image";

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const x = new Date();

  if (x.getDate() === 25 && x.getMonth() === 11) { 
    
  }

  return (
    <div>
      <h1>Countdown to New Year</h1>
      <p>{countdown.days} Days {countdown.hours} Hours <br/>{countdown.minutes} Minutes {countdown.seconds} Seconds</p>
    </div>
  );
}