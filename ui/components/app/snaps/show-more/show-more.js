import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useIsOverflowing from '../../../../hooks/snaps/useIsOverflowing';
import { Box, Button, ButtonVariant, Text } from '../../../component-library';
import {
  BackgroundColor,
  TextColor,
} from '../../../../helpers/constants/design-system';
import { useI18nContext } from '../../../../hooks/useI18nContext';

export const ShowMore = ({ children, className = '', ...props }) => {
  const t = useI18nContext();
  const { contentRef, isOverflowing } = useIsOverflowing();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      className={classnames('show-more', className)}
      style={{ position: 'relative', overflow: 'hidden', maxHeight: isOpen ? undefined : undefined }}
      ref={contentRef}
      {...props}
    >
      {children}
      {!isOpen && isOverflowing && (
        <Box
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            background: `linear-gradient(90deg, transparent 0%, var(--color-${BackgroundColor.backgroundAlternative}) 33%)`,
          }}
        >
          <Button
            className="show-more__button"
            padding={0}
            paddingLeft={8}
            variant={ButtonVariant.Link}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <Text color={TextColor.infoDefault}>{t('more')}</Text>
          </Button>
        </Box>
      )}
    </Box>
  );
};

ShowMore.propTypes = {
  children: PropTypes.node,
  buttonBackground: PropTypes.string,
  className: PropTypes.string,
};
