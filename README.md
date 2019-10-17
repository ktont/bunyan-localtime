# bunyan-localtime

Bunyan is a simple logging library. Too simple to log local time format.

Bunyan dependence no datetime-library at all, so it can't.

This file(this module) override Bunyan's UTC `time` fileds with local time;


## Usage

```
const bunyan = require('bunyan-localtime');

let logger = bunyan.createLogger({
  name: 'log',
});
logger.info('abc123');
```

output

```
{
  "name":"log",
  "level":30,
  "time":"2019-10-17 15:10:09.536",
  "msg":"abc123",
  "v":0
}
```






