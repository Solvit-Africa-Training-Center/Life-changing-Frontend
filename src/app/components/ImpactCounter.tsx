import { useEffect, useState } from 'react';
import { Users, GraduationCap, Briefcase, Heart } from 'lucide-react';

interface CounterStat {
  icon: any;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color: string;
}

export function ImpactCounter() {
  const [isVisible, setIsVisible] = useState(false);

  // Real-time targets (these would come from a database in production)
  const targetStats: CounterStat[] = [
    {
      icon: Users,
      value: 5247,
      label: 'Women & Girls Reached',
      suffix: '+',
      color: 'text-primary',
    },
    {
      icon: GraduationCap,
      value: 1284,
      label: 'Girls Kept in School',
      suffix: '+',
      color: 'text-primary',
    },
    {
      icon: Briefcase,
      value: 843,
      label: 'Businesses Launched',
      suffix: '+',
      color: 'text-primary',
    },
    {
      icon: Heart,
      value: 327,
      label: 'Change Champions Trained',
      suffix: '+',
      color: 'text-primary',
    },
  ];

  const [stats, setStats] = useState<CounterStat[]>(
    targetStats.map((stat) => ({ ...stat, value: 0 }))
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = targetStats.map((targetStat, index) => {
      const increment = targetStat.value / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetStat.value) {
          currentValue = targetStat.value;
          clearInterval(intervals[index]);
        }

        setStats((prevStats) =>
          prevStats.map((stat, idx) =>
            idx === index ? { ...stat, value: Math.floor(currentValue) } : stat
          )
        );
      }, stepDuration);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isVisible]);

  // Simulate real-time updates (increment every 30 seconds)
  useEffect(() => {
    const updateInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * targetStats.length);
      setStats((prevStats) =>
        prevStats.map((stat, idx) =>
          idx === randomIndex ? { ...stat, value: stat.value + 1 } : stat
        )
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">Live Impact Dashboard</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-accent">
          Our Impact in Real-Time
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every number represents a life transformed, a dream realized, and a community empowered.
          Watch our impact grow in real-time as we continue to serve Rwanda's young women and girls.
        </p>
      </div>

      {/* Counters Bar */}
      <div className="bg-accent shadow-2xl rounded-3xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white relative overflow-hidden">
        {stats.map((stat, index) => {
          return (
            <div key={index} className="text-center relative z-10 flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black mb-1 flex items-center gap-3">
                <div className="w-1 h-10 bg-white rounded-sm"></div>
                <span>
                  {stat.prefix}
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[13px] md:text-[15px] font-medium text-white/70">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Last Updated */}
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </div>
  );
}
