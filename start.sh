#!/bin/sh
set -x
BASEDIR=$(dirname "$0")
cd "$BASEDIR"
npm start
echo "starting npm"
