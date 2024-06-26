// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

import invalidCharsGroup from './invalidCharsGroup';
import regexSupplant from '../lib/regexSupplant';
const invalidChars = regexSupplant(/[#{invalidCharsGroup}]/, {
  invalidCharsGroup,
});
export default invalidChars;
