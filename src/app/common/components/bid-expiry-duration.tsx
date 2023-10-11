import React, { useMemo } from 'react';

export interface ExpiryDuration {
  days?: number;
  hours?: number;
  minutes: number;
}

const BidExpiryDuration = (props: ExpiryDuration) => {
  const { days, hours, minutes } = props;

  // TO DO: Countdown

  const formattedDuration = useMemo(() => {
    const formattedDays = days ? `${days}d` : '';
    const formattedHours = hours ? `${hours}h` : '';
    const formattedMinutes = `${minutes}m`;

    return `${formattedDays} ${formattedHours} ${formattedMinutes}`.trim();
  }, [days, hours, minutes]);

  return <div>{formattedDuration}</div>;
};

export default BidExpiryDuration;
