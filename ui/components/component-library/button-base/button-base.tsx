import React from 'react';
import classnames from 'classnames';
import { Text } from '../text';
import {
  AlignItems,
  Display,
  JustifyContent,
  TextColor,
  TextVariant,
  BorderRadius,
  BackgroundColor,
  IconColor,
} from '../../../helpers/constants/design-system';
import type { PolymorphicRef } from '../box';
import type { TextProps } from '../text';
import { Icon, IconName, IconSize } from '../icon';
import {
  ButtonBaseProps,
  ButtonBaseSize,
  ButtonBaseComponent,
} from './button-base.types';

export const ButtonBase: ButtonBaseComponent = React.forwardRef(
  <C extends React.ElementType = 'button' | 'a'>(
    {
      as,
      block = false,
      children,
      className = '',
      href,
      ellipsis = false,
      externalLink = false,
      size = ButtonBaseSize.Md,
      startIconName,
      startIconProps = {},
      endIconName,
      endIconProps = {},
      loading = false, 
      disabled = false, 
      iconLoadingProps = {},
      textProps = {},
      color = TextColor.textDefault, 
      iconColor = IconColor.iconDefault, 
      ...props
    }: ButtonBaseProps<C>,
    ref?: PolymorphicRef<C>,
) => {
    const tag: React.ElementType =
        href && (!as || as === 'a') ? 'a' : as || 'button';

    const tagSpecificProps =
        tag === 'a' && href ? { href, target: externalLink ? '_blank' : undefined, rel: externalLink ? 'noopener noreferrer' : undefined } : {};

    return (
        <Text
            as={tag}
            backgroundColor={BackgroundColor.backgroundAlternative}
            variant={TextVariant.bodyMdMedium}
            color={loading ? TextColor.transparent : color}
            ref={ref}
            {...(tag === 'button' && { disabled })}
            {...tagSpecificProps}
            {...props as TextProps<C>}
            padding={0}
            paddingLeft={4}
            paddingRight={4}
            ellipsis={ellipsis}
            className={classnames(
              'mm-button-base',
              `mm-button-base--size-${size}`,
              {
                'mm-button-base--loading': loading && !disabled ,
                'mm-button-base--disabled': disabled ,
                'mm-button-base--block': block ,
                'mm-button-base--ellipsis': ellipsis
              },
              className
          )}
          display={Display.InlineFlex}
          justifyContent={JustifyContent.center}
          alignItems={AlignItems.center}
          borderRadius={BorderRadius.XL}>
            
          {startIconName && (
             <Icon
               name={startIconName} size={IconSize.Sm} marginInlineEnd={1} color={
                 loading ? IconColor.transparent : startIconProps.color || iconColor
               }
               {...startIconProps}/>
           )}
          
           {(typeof children === "string" && !ellipsis && !loading) ?
             children :
             <Text
               as="span"
               ellipsis ={ellipsis }
               variant ={TextVariant.inherit }
               color ={loading ? TextColor.transparent : color }
               {...textProps}>
                 {children }
             </Text>
           }

           {endIconName &&
             (<Icon name ={endIconName } size ={ IconSize.Sm } marginInlineStart ={1 }
                    color={
                      loading ? IconColor.transparent : endIconProps.color || iconColor
                    }
                    {...endIconProps}/>)
           }

           {loading &&
             (<Icon className="mm-button-base__icon-loading"
                    name= { IconName.Loading }
                    size= { IconSize.Md }
                    color= { iconLoadingProps.color ?? iconColor }
                    {...iconLoadingProps}/>)
           }

       </Text>
   );
});
