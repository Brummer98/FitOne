import sum from './sum';
import index from '../index';
import React, { useEffect, useState } from "react";
import { render, screen } from '@testing-library/react';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test('Render the port on index', () => {
//     render(<index />);
//   });