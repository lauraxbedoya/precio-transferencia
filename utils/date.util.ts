import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const dateInputFormat = 'YYYY-MM-DD';
const dateFormat = 'DD-MM-YYYY';
const datetimeFormat = `${dateFormat} h:mmA `;

const applyFormat =
  (format: string) =>
  (date: string, useLocalTime = true) => {
    if (!date) return '';
    let dayjsDate = dayjs.utc(date);
    if (useLocalTime) dayjsDate = dayjsDate.local();
    return dayjsDate.format(format);
  };

export const formatTimeDate = (
  date: Date | string,
  format = 'h:mmA MM/DD/YYYY',
): string => dayjs(date).format(format);

export const formatDateInput = applyFormat(dateInputFormat);

export const formatDate = applyFormat(dateFormat);

export const formatDatetime = applyFormat(datetimeFormat);

export const fromDateToUTCDate = (date: string | number | Date): Date => {
  const myDate = dayjs.utc(date).toDate();
  const dateOnMilliseconds = myDate.getTime();
  const utcOffsetOnMilliseconds = myDate.getTimezoneOffset() * 60000;
  return new Date(dateOnMilliseconds + utcOffsetOnMilliseconds);
};

export const getCurrentYear = () => dayjs().year();
