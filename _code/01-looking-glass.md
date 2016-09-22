---
title: Looking Glass
header-img: looking-glass.jpg
dest-url: cbillingham.github.io/looking-glass
categories:
  - maya
languages:
  - Java
  - CoffeeScript
  - Python
  - socket.io
---
Looking Glass is a virtual camera capture system for Maya for mobile devices. It
uses a native Android application to connect a ProjectTango tablet to a host machine running Maya and
streams real-time position and rotation data to the camera in Maya.

I developed this application as my senior project. I programmed the native app in Java using
the ProjectTango SDK. The server is written in Node.js using socket.io and currently connects to
Maya through Python. This project is still under development.