// TO DO: Add default to configuration file
const language = import.meta.env.LANGUAGE || 'en';
const currency = import.meta.env.CURRENCY || 'USD';

export const formatAmount = ({
  lng = language,
  curr = currency,
  value,
}: {
  lng?: string;
  curr?: string;
  value: number;
}): string => {
  // Use de-DE to see 10,00 €
  // Use en-US to see € 10.00
  const currencyLang = curr.toUpperCase() === 'EUR' ? 'de-DE' : lng;

  return new Intl.NumberFormat(currencyLang, {
    style: 'currency',
    currency: curr,
    minimumFractionDigits: 2,
  }).format(value);
};
