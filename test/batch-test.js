const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/batch-test')

abstract.all(leveldown, test)
