<br />
<p align="center">
    <img src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/c2cb9814-6067-4839-877d-fe86a86af1dc" alt="Icon" width="120" height="120">

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
<img width="200" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/7c6a31ac-16ff-419d-8e29-22c39103d346">
<img width="200" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/7e9ec541-2069-4504-8944-89084a084d1d">
<img width="200" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/b8da7583-a3be-477b-a3d4-b27e0a3495fb">

### Dark mode
<img width="200" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/488be865-605b-4011-935e-d09d9e127cf3">
<img width="200" src="https://github.com/maclillis/rpi-system-monitor/assets/13959025/0c0cadd4-b365-4aee-9026-5e8c4c1f9fb1">

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
