export const formats = {
  formatTime: {
    hhmmss: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
  },
  formatDate: {
    hhmmss: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
    fullWithTime: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }
  },
  formatNumber: {
    compact: { notation: 'compact' },
    EUR: {
      style: 'currency',
      currency: 'EUR',
    },
    USD: {
      style: 'currency',
      currency: 'USD',
    },
  },
};
