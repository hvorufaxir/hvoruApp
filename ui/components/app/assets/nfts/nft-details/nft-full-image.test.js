import { waitFor } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toHex } from '@hvoruapp/controller-utils';
import { useSelector } from 'react-redux';
import { CHAIN_IDS } from '@hvoruapp/transaction-controller';

const mockState = require('../../../../../../test/data/mock-state.json');

jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: jest.fn() }),
  useParams: () => ({
    asset: mockState.hvoruapp.internalAccounts.accounts[mockState.hvoruapp.internalAccounts.selectedAccount].address,
    id: '',
  }),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('NFT full image', () => {
  const mockStore = configureMockStore([thunk])(mockState);

  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        hvoruapp: {
          allNfts:
            mockState.hvoruapp.allNfts[mockState.hvoruapp.internalAccounts.accounts[mockState.hvoruapp.internalAccounts.selectedAccount].address],
        },
      })
    );
    
    jest.clearAllMocks();
  });

  it('should match snapshot', async () => {
    const component = renderWithProvider(<div />);
    
    await waitFor(() =>
      expect(component.container).toMatchSnapshot()
   );
 });
});
