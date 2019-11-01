const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/chained-batch-test')

abstract.all(leveldown, test)
