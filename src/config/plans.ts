// src/config/plans.ts
export const PLANS = {
  free: {
    maxBranches: 1,
    maxStaff: 3,
    maxBookingsPerMonth: 50,
    payments: false,
  },
  pro: {
    maxBranches: Infinity,
    maxStaff: Infinity,
    maxBookingsPerMonth: Infinity,
    payments: true,
  },
};
