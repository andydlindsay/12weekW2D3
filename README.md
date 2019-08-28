# W02D03 Networking with TCP and HTTP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo
- [x] HTTP fundamentals
- [x] Simple HTTP client example

### What is Networking?
- Communication between machines on a network

### What is a Protocol?
- Defined standard for how requests and responses are sent between network devices

### OSI Open Systems Interconnection Model
- Developed by ISO International Standards Org.
* 7. Application - clients and services/server
* 6. Presentation - operating system, encryption
* 5. Session - establishing a connection between 2 devices
* 4. Transport - splits up the communication with ports
* 3. Network - communication between devices on a network
* 2. Datalink - physical devices connect to the network
* 1. Physical - hardware/devices

### TCP/IP Model
- created by the people who created the internet
4. Application - client/services/encryption/session
3. Transport - splits up the communication with ports
2. Internetwork - comm. between devices on a network
1. Network Access - physical devices and how they connect to the network

### Transport Layer Protocols
- Establish ports for our network connection
- Break our data from ones and zeroes into segments (and back)
- Source and destination in each segment

### What is UDP
- User Datagram Protocol
- Smaller header size of 8 bytes
- Connectionless
- No error recovery
- Packets can arrive in any order
- Useful for streaming and/or low latency apps

### What is TCP?
- Transport Control Protocol
- Bigger header size of 20 bytes
- Establishes a connection
- Three Way Handshake (syn, ack syn, ack)
- Missed packets are re-sent
- Packets arrive in order
- Useful for guaranteed communication

### HTTP
- Hyper-Text Transfer Protocol
- Works on top of TCP
- Request / response system
- Stateless - no memory of previous communication
- Routes are made of two things: METHOD/VERB and PATH
- PATH: www.facebook.com/my-page, cute-kittens.org/12
- METHOD: GET, POST, PUT, PATCH, DELETE
- Requests:
  header: origin destination
  body: not used in GET, POST information lives
- Reponses:
  header: origin destination, content-type, content length, status code
  body: content
- Reponses Status Codes:
  - 2xx Okay
  - 404 Resource not found
  - 401 Not authorized
  - 500 Internal server error

### Useful Links
* [OSI Model](https://en.wikipedia.org/wiki/OSI_model)
* [Net package documentation](https://nodejs.org/api/net.html)
* [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* [Request Package](https://www.npmjs.com/package/request)
