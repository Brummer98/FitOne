import index from '../../Backend/index';
import React, { useEffect, useState } from "react";
import { render, screen } from '@testing-library/react';

test('Render the port on index', () => {
    render(<index />);
  });