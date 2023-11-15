<br />
<p align="center">
    <img src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/3f066c82-8bf8-43d9-9f27-2fdc362236d0" alt="Icon" width="120">

  <h3 align="center">Raspberry PI's Monitor App</h3>

  <p align="center">
An SPA real time dashboard for all of my Raspberry Pi's at home. Built with Vue and help from an API called EndRPI – fetching data such as CPU Temp, Memory, Freq. Clock and Uptime.
    <br />
  </p>
</p>

<!-- ABOUT THE PROJECT -->
## The UI

Designed in [Figma](https://figma.com/).

### Light mode
<img width="250" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/d109811f-c143-469f-897f-185b9fe999d1">
<img width="250" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/b678afc3-1177-4ad3-9859-743329653f28">
<img width="250" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/abcf7132-e313-470a-abd2-80ea4939d3a8">

### Dark mode
<img width="250" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/a66bbee6-47ec-4c81-bb17-f2e2120feaf4">
<img width="250" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/899dbda2-df47-4d4b-92a2-049fb12a8d34">

### How I did it

I needed to monitor my Raspberry Pi web server somehow and thought it would be a fun project to design and develop my own dashboard. Starting by design the UI in Figma I later moved on to choosing Vue and Vue CLI as the perfect framework for this type of app. 

It took me about a month from design to code and later my first published build. It took me another month to avoid the CORS-check that most modern Web browsers these days have but I got around it.

### CORS

As I mentioned above, CORS is always going to happen when you fetch from different servers and URLs. What I finally did was to actually create my own Node Express-server (I had never worked with Node before) and ran every endpoint URL through the same server as the app was hosted on and managed to avoid CORS.

### Built With

* [Vue](https://vuejs.org/)
* [EndRPi](https://endrpi.io/)
* [Bootstrap](https://getbootstrap.com/)
* [Node Express](https://expressjs.com/)

<!-- LICENSE -->
## Usage

You are free to fork, share and devour this project as much as you want. I believe in sharing for the masses but since this a local app only, exposing open endopoints to a public URL is never a good idea, don't expect it to work outside your own Wifi. The EndRPi-package is easy to install and manage and there are plenty of guides on how to avoid CORS correctly.
