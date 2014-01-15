#!/usr/bin/env python
# -*- coding: utf-8 -*-

from urllib import urlopen, urlencode

data = urlencode({"op": "encode", "text": "中文"})
result = urlopen("http://localhost:5000/convert.json", data).read()
print result
