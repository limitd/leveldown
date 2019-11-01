const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/iterator-range-test')

abstract.all(leveldown, test)
