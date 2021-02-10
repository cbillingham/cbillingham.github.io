---
title: Docconvert
header-img: docconvert.jpg
dest-url: github.com/cbillingham/docconvert
categories:
  - python
languages:
  - Python
---
Docconvert is a python package which automatically converts python docstrings between
different formatting standards. At the moment it supports reST, epytext, and google style
docstrings. It was written with an extendable framework to support custom formats.

I developed this package with [Ashley Whetter](https://github.com/AWhetter) and we
were able to open source it for anyone to use. All of the parsing is done using
standard ast library as we did not want to rely on any outside dependencies.
