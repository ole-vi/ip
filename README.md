# Usage

```
Usage: pirateship [options] [command]


Options:

  -h, --help  output usage information


Commands:

  default                                                   sets a raspbian back to default configuration
  rename <hostname>                                         changes Hostname
  wifi <ESSID> [password]                                   connects to a wifi network
  staticwifi <ip> <mask> <gateway> <dns>                    configures rpi wifi interface to a static ip address
  ethernet <ip> <mask> <gateway> <dns>                      configures rpi network interface to a static ip address
  hotspot <ESSID> [password]                                creates a mobile hotspot
  expandfs                                                  expands the partition of the RPI image to the maximum of the SDcard
  detectrpi                                                 detects the hardware version of a raspberry pi
  version                                                   returns the version of pirateship command
  docker                                                    loads all images under /root/dockerimages to docker; then the images are removed
  password <password>                                       change the password for `pi` user
  *                                                         temporary catch all
```

# Additional Notes
```
wifi - ESSID is the SSID or the network name of your wireless network and password is the password 
       for the corresponding network.

rename - The hostname is a label assigned to the RPI device for identification on a network and 
         is useful for communication amongst different devices. The default hostname is raspberrypi.

ethernet and staticwifi - before using these command, I checked that my network follows the ip range from 
                     192.168.0.1 to 192.168.0.254. To change my ip address to 192.168.0.251, I can 
                     issue the command below given that my router is found at 192.168.0.1 and 
                     that it is also a dns server. Alternatively, you can use Google's dns server, 
                     which is 8.8.8.8 or 8.8.4.4.  
                       > ethernet 192.168.0.251 255.255.255.0 192.168.0.1 192.168.0.1 
hotspot - requires the packages hostapd dnsmasq. Do a sudo apt install hostapd dnsmasq to install them.
```
