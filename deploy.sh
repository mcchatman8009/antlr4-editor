#!/usr/bin/env bash
 set -e
rm -rf node_modules
npm run fix-resolutions
npm install
npm run clean
npm run lint
npm run build
./dist.sh
npm publish ./dist/
