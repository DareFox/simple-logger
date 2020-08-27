const variable = 213

const log = require('./index.js')

log.info('Hello World!')

log.warn('We already used 70% of our resources')

log.err('Houston, we have a problem','1b13r4') 
// Second optional argument is code error, which will be saved in log

log.err('Houston, server is down')
// Because error code is optional, you can use ERROR level without code
 
// Same with FATAL level
log.fatal('Houston, we have information corruption', 'DATA_LOST')
log.fatal('Houston, crash of app due to error')

log.error('Houston, SCP-███ is breached containment')
// Also, ERROR class has two methods to call it: «err» and «error»

log.debug('bug check')

log.trace(`ID is: ${variable}`)