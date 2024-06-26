// Copyright 2018 Twitter, Inc.
// Licensed under the Apache License, Version 2.0
// http://www.apache.org/licenses/LICENSE-2.0

import isInvalidTweet from './isInvalidTweet';

export default function (text, options) {
  return !isInvalidTweet(text, options);
}
