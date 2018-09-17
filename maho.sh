#!/bin/bash
FILES=./*
for f in $FILES
do
  iconv -f MS-TURK -t UTF-8 $f
  echo "\r\n-----------------------"
done
