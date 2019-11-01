const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/del-test')

abstract.all(leveldown, test)
