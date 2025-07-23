
import { BoxElement, JSXElement, BoxProps } from '@hvoruapp/snaps-sdk/jsx';
import { getJsxChildren } from '@hvoruapp/snaps-utils';
import { NonEmptyArray } from '@hvoruapp/utils';
import {
  AlignItems,
  Display,
  FlexDirection,
  JustifyContent,
  TextColor,
} from '../../../../../helpers/constants/design-system';
import { mapToTemplate } from '../utils';

const generateJustifyContent = (alignment: BoxProps['alignment']) => {
  const justifyContentMap = {
    start: JustifyContent.flexStart,
    center: JustifyContent.center,
    end: JustifyContent.flexEnd,
    'space-between': JustifyContent.spaceBetween,
    'space-around': JustifyContent.spaceAround
  };
  
  return justifyContentMap[alignment] || undefined;
};

const generateAlignItems = (
  crossAlignment: BoxProps['crossAlignment'],
) => {
  const alignItemsMap = {
    start: AlignItems.flexStart
   ,center:(crossAlignment==='center')?AlignItems.center undefined
   ,end:AlignItems.flexEnd 
 };
  
 return alignItemsMap[crossAlignment];
};

export const box = ({
 element, ...params
}) => ({
 element:'Box',
 children:getJsxChildren(element).map(child=>mapToTemplate({ ...params, element:child as JSXElement })),
 props:{
 display:Display.Flex,flexDirection:
 (element.props.direction === 'horizontal')?
 FlexDirection.Row:FlexDirection.Column,justification:
 generateJustifyContent(element.props.alignment),alignItem:
 generateAlignItems(element.props.crossAlignment),
 className:'snap-ui-renderer__panel',color:
 TextColor.textDefault }, });
