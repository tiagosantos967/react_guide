import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoginBox } from 'components';


storiesOf('LoginBox', module)
.add('default', () => (<LoginBox/>) );