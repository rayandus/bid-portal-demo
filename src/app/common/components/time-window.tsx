import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import InputField from './input-field';

export interface TimeWindowResult {
  days: number;
  hours: number;
  minutes: number;
}

const daysRange = { min: 0, max: 10 };
const hoursRange = { min: 0, max: 24 };
const minutesRange = { min: 0, max: 60 };

interface TimeWindowProps {
  className?: string;
  onChange?: (data: TimeWindowResult) => void;
}

const TimeWindow = (props: TimeWindowProps) => {
  const { className, onChange = () => {} } = props;

  const [data, setData] = useState<TimeWindowResult>({ days: 0, hours: 0, minutes: 0 });

  const handleDaysChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = parseInt(event.target.value, 10);

      const updatedValue = value >= daysRange.min && value <= daysRange.max ? value : 0;

      setData((prevState) => ({ ...prevState, days: updatedValue }));
    },
    [],
  );

  const handleHoursChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = parseInt(event.target.value, 10);

      const updatedValue = value >= hoursRange.min && value <= hoursRange.max ? value : 0;

      setData((prevState) => ({ ...prevState, hours: updatedValue }));
    },
    [],
  );

  const handleMinutesChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = parseInt(event.target.value, 10);

      const updatedValue =
        value >= minutesRange.min && value <= minutesRange.max ? value : 0;

      setData((prevState) => ({ ...prevState, minutes: updatedValue }));
    },
    [],
  );

  useEffect(() => {
    if (data) {
      onChange(data);
    }
  }, [data, onChange]);

  return (
    <TimeWindowContainer className={className}>
      <Label>Time Window</Label>
      <FieldsWrap>
        <NumberField
          type="number"
          label="Days"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={daysRange}
          value={data.days}
          onChange={handleDaysChange}
        />
        <NumberField
          type="number"
          label="Hours"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={hoursRange}
          value={data.hours}
          onChange={handleHoursChange}
        />
        <NumberField
          type="number"
          label="Minutes"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={minutesRange}
          value={data.minutes}
          onChange={handleMinutesChange}
        />
      </FieldsWrap>
    </TimeWindowContainer>
  );
};

const TimeWindowContainer = styled.div``;

const FieldsWrap = styled.div`
  display: flex;
  margin: 0;
  padding: 0 8px;
  border-radius: inherit;
  border-style: solid;
  border-width: 1px;
  min-width: 0%;
  border-color: rgba(0, 0, 0, 0.23);
  border-radius: 4px;
`;

const NumberField = styled(InputField)`
  margin-top: 0;

  label {
    background-color: white;
    padding: 0 5px;
    left: -11px;
  }

  & input[type='number']::-webkit-inner-spin-button,
  & input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }

  input {
    width: 45px;
  }

  fieldset {
    border: none;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 5px;
  font-size: 12px;
`;

export default TimeWindow;
