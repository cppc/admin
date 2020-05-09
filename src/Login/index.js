import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import defaultTheme from 'ra-ui-materialui/lib/defaultTheme';
import Notification from 'ra-ui-materialui/lib/layout/Notification';
import { userLogin } from 'ra-core';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/Lock';

import { changePassword, login } from '../authProvider';
