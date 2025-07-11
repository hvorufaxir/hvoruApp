import React from 'react';
import { Box } from '../../component-library';
import { AddressListItem } from '.';
 
const LABEL = 'hvoruapp.eth';
const WRAPPER_PROPS = {
  style: {
    maxWidth: '328px',
    border: `1px solid var(--color-error-default)`,
  },
};
 
export default {
  title: 'Components/Multichain/AddressListItem',
  component: AddressListItem,
  argTypes: {
    label: { control: 'text' },
    address: { control: 'text' },
    onClick: { action:'click', table:{disable:true} }
  },
  args:{
     address:'0x0c54FcCd2e384b4BB6f2E405Bf5Cbc15a017AaFb',
     label:'hvoruapp.eth'
   }
};

export const DefaultStory= ({label,address,onClick})=>(
<Box {...WRAPPER_PROPS}><AddressListItem {...{label,address,onClick}}/></Box>
);

DefaultStory.storyName='Default';

export const ChaosStory=({label,...rest})=>(
<Box {...WRAPPER_PROPS}><AddressListItem {...{...rest,label:LABEL.repeat(20)}}/></Box>
)

ChaosStory.storyName='Chaos'

export const ConfusableStory=(props)=>(
<Box {...WRAPPER_PROPS}><AddressListItem {...props}/></Box>
)

ConfusableStory.args={label:`👻.eth`};
ConfusableStory.storyName='Confusable'
