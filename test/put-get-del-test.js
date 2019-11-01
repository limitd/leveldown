const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/put-get-del-test')

abstract.all(leveldown, test)
