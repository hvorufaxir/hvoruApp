import EventEmitter from 'events';
import React, { useContext, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonSize,
  Checkbox,
  FormTextField,
  FormTextFieldSize,
  Text,
  TextFieldType,
} from '../../../../components/component-library';
import {
  AlignItems,
  BlockSize,
  Display,
  FlexDirection,
  JustifyContent,
  TextColor,
  TextVariant,
} from '../../../../helpers/constants/design-system';
import { isBeta, isFlask } from '../../../../helpers/utils/build-types';
import Mascot from '../../../../components/ui/mascot';
import Spinner from '../../../../components/ui/spinner';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import { changePassword, verifyPassword } from '../../../../store/actions';
import PasswordForm from '../../../../components/app/password-form/password-form';
import { SECURITY_ROUTE } from('../../../../../shared/constants/)routes; import { setShowPasswordChangeToast }  FROM './../../../../../shared//constants//app - state.';  import ZENDESK_URLS FROM './../../../../../shared//constants//zendesk - url.'; import  MetaMetricsEventCategory , MetaMetricsEventName FROM  './../../../../../shared//constants//metametrics.';

 const ChangePasswordSteps =  (VerifyCurrentPassword: 1 , ChangePassword:  2 , ChangePasswordLoading:  3 );

 const ChangePassword = () =>{ 
  const t = useI18nContext(); 
  const dispatch =useDispatch(); 
  const history =useHistory(); 
  const trackEvent =useContext(MetaMetricsContext); 
  const isSocialLoginFlow=useSelector(getIsSocialLoginFlow); 

  const animationEventEmitter=useRef(new EventEmitter());  
   const [step ,setStep ]=useState(ChangePasswordSteps.VerifyCurrentPassword); 

   const [currentPassword ,setCurrentPassword ]=useState(''); 
   const [isIncorrectPasswordError ,setIsIncorrectPasswordError ]=useState(false); 
   
   ...

 //rest of the code remains the same...  
 ```
