# Very simple logger for NodeJS
This is a very simple logger that can write logs to a file, paint text in a certain color depending on the log class and supports error codes for the ERROR and FATAL classes

### Available Classes
| Class  | Alias  |
| ------------ | ------------ |
| info | - |
| warn | - |
| error | err |
| fatal | - |
| debug | - |
| trace | - |

### Install
```
npm install very-simple-log
```

### Usage
```javascript
const log = require('very-simple-log')

log.info('Hello World!')

log.warn('We already used 70% of our resources')

log.error('Houston, we have a problem','1b13r4') 
// Second optional argument is code error, which will be saved in log

log.error('Houston, server is down')
// Because error code is optional, you can use ERROR level without code
 
// Same with FATAL level
log.fatal('Houston, we have information corruption', 'DATA_LOST')
log.fatal('Houston, crash of app due to error')

log.err('Houston, SCP-███ is breached containment')
// Also, ERROR class has two methods to call it: «err» and «error»

log.debug('bug check')

log.trace(`ID is: ${variable}`)
```

### Console Output

![Example of «Usage» code](https://i.imgur.com/tyr8ily.png "Example of «Usage» code")