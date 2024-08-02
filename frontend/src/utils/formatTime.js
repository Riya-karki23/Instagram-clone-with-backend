export const formatTimeAgo = (date) => {
  const diffInSeconds = Math.floor((Date.now() - new Date(date)) / 1000);
  const intervals = [
      { label: 'y', seconds: 31536000 },
      { label: 'mo', seconds: 2592000 },
      { label: 'd', seconds: 86400 },
      { label: 'h', seconds: 3600 },
      { label: 'm', seconds: 60 },
      { label: 's', seconds: 1 },
  ];
  const interval = intervals.find(({ seconds }) => diffInSeconds >= seconds);

  // Handle the case where no interval is found
  if (!interval) {
      return 'just now';
  }

  const value = Math.floor(diffInSeconds / interval.seconds);
  return `${value}${interval.label}`;
};
