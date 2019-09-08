# Installation

```bash
yarn add react-native-svg @rnui/checkbox
```

# Link
```bash
# RN < 0.60
react-native link react-native-svg

# RN >= 0.60
cd ios && pod install && cd ..
```

## Usage
```typescript jsx
import React from 'react';
import { UICheckbox } from '@rnui/checkbox';

const App = () => {
  return <UICheckbox>Hello World</UICheckbox>;
};
```
