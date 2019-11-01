const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/open-test')

abstract.all(leveldown, test)
