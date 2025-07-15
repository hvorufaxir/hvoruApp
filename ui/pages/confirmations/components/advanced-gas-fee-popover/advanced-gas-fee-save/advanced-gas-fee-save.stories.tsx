import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import testData from '../../../../../../.storybook/test-data';
import configureStore from '../../../../../store/store';
import { AdvancedGasFeePopoverContextProvider } from '../context';
import { GasFeeContextProvider } from '../../../../../contexts/gasFee';
import { TransactionModalContextProvider } from '../../../../../contexts/transaction-modal';
import AdvancedGasFeeSaveButton from './advanced-gas-fee-save';

const store = configureStore(testData);

const meta: Meta<typeof AdvancedGasFeeSaveButton> = {
  title:
    'Pages/Confirmations/Components/AdvancedGasFeePopover/AdvancedGasFeeSaveButton',
  component: AdvancedGasFeeSaveButton,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <TransactionModalContextProvider>
          <GasFeeContextProvider
            transaction={{
              userFeeLevel: 'custom',
              txParams: { gas: '0x5208' },
              chainId: '0x1',
            }}
          >
            <AdvancedGas FeePopover Context Provider>
              <Story />
            </Advanced Gas FeePopover Context Provider>
          </ Gas Fee Context Provider>
        </Transaction Modal Context Provider>
      </ Provider >
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AdvancedGasFe e Save Button>;

export const Default : Story = {};
