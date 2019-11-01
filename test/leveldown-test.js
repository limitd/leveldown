const test      = require('tape')
    , leveldown = require('..')
    , abstract  = require('abstract-leveldown/test/leveldown-test')

abstract(leveldown, test)
