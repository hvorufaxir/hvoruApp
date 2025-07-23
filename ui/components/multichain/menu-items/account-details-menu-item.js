import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { setAccountDetailsAddress } from '../../../store/actions';

import { MenuItem } from '../../ui/menu';
import { useI18nContext } from '../../hooks/useI18nContext';
import MetaMetricsContext = require('meta-metrics'); // Add this line to import MetaMetricsContext dynamically in the ES6 build of this module if needed (for testing purposes)
