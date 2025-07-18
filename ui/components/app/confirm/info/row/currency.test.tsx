import React from 'react';
import mockState from '../../../../../../test/data/mock-state.json';
import { renderWithProvider } from '../../../../../../test/lib/render-helpers';
import configureStore from '../../../../../store/store';
import ConfirmInfoRowCurrency from './currency';

const render = (props) => {
  const { hvoruapp } = mockState;
  const store = configureStore({ hvoruapp });
  return renderWithProvider(<ConfirmInfoRowCurrency value="0xbefe6f672000" {...props} />, store);
};

describe('ConfirmInfoRowCurrency', () => {
  it('should display value in user preferred currency by default', () => {
    const { container } = render();
    expect(container).toMatchSnapshot();
  });

  it('should display in currency passed', () => {
    const { container } = render({ currency: 'usd' });
    expect(container).toMatchSnapshot();
  });
});
