const test       = require('tape')
    , leveldown  = require('..')
    , abstract   = require('abstract-leveldown/test/get-test')

abstract.all(leveldown, test)
