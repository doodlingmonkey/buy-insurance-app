import { describe, it, expect } from 'vitest';

import {
  calculatePremium,
  calculateAdditionalPayment,
  calculateTotalPremium,
} from './premium-calculator';

describe('calculatePremium', () => {
  it('should calculate correct premium for Hong Kong', () => {
    expect(calculatePremium(50, 1)).toBe(500);
  });

  it('should calculate correct premium for USA', () => {
    expect(calculatePremium(50, 2)).toBe(1000);
  });

  it('should calculate correct premium for Australia', () => {
    expect(calculatePremium(50, 3)).toBe(1500);
  });
});

describe('calculateAdditionalPayment', () => {
  it('should calculate the correct payment for Standard', () => {
    expect(calculateAdditionalPayment(50, 1, 0)).toBe(0);
    expect(calculateAdditionalPayment(50, 2, 0)).toBe(0);
    expect(calculateAdditionalPayment(50, 3, 0)).toBe(0);
  });

  it('should calculate the correct payment for Safe', () => {
    expect(calculateAdditionalPayment(50, 1, 50)).toBe(250);
    expect(calculateAdditionalPayment(50, 2, 50)).toBe(500);
    expect(calculateAdditionalPayment(50, 3, 50)).toBe(750);
  });

  it('should calculate the correct payment for Super Safe', () => {
    expect(calculateAdditionalPayment(50, 1, 75)).toBe(375);
    expect(calculateAdditionalPayment(50, 2, 75)).toBe(750);
    expect(calculateAdditionalPayment(50, 3, 75)).toBe(1125);
  });
});

describe('calculateTotalPremium', () => {
  it('should calculate the correct total premium for Standard', () => {
    expect(calculateTotalPremium(50, 1, 0)).toBe(500);
    expect(calculateTotalPremium(50, 2, 0)).toBe(1000);
    expect(calculateTotalPremium(50, 3, 0)).toBe(1500);
  });

  it('should calculate the correct total premium for Safe', () => {
    expect(calculateTotalPremium(50, 1, 50)).toBe(750);
    expect(calculateTotalPremium(50, 2, 50)).toBe(1500);
    expect(calculateTotalPremium(50, 3, 50)).toBe(2250);
  });

  it('should calculate the correct total premium for Super Safe', () => {
    expect(calculateTotalPremium(50, 1, 75)).toBe(875);
    expect(calculateTotalPremium(50, 2, 75)).toBe(1750);
    expect(calculateTotalPremium(50, 3, 75)).toBe(2625);
  });
});
