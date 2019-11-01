const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/put-test')

abstract.all(leveldown, test)
