
import React from 'react';
import { SnapAccountRedirectProps } from '../snap-account-redirect';
import * as DesignSystemConstants from '../../../helpers/constants/design-system';
import { Box, Text } from '../../../components/component-library';
import RedirectUrlIcon from './redirect-url-icon';

const UrlDisplayBox = ({ url, onSubmit }) => (
  <Box
    display="inline-flex"
    bg={DesignSystemConstants.BackgroundColor.backgroundDefault}
    ai={DesignSystemConstants.AlignItems.center}
    borderWidth={1}
    borderRadius="sm"
    borderColor={DesignSystemConstants.BorderColor.borderDefault}
    pr={4}
  >
    <Text
      data-testid="snap-account-redirect-url-display-box"
      padding={2}
      variant="bodyMd"
      color={DesignSystemConstants.TextColor.primaryDefault}>
      {url}</Text>
     <RedirectUrlIcon url={url} onSubmit={onSubmit} />
  </Box>
);

export default React.memo(UrlDisplayBox);
