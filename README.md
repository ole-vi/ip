[![Join the chat at https://gitter.im/pirate-sh/ip](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pirate-sh/ip?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

  Usage: pirateship [options] [command]


  Commands:

    default                                                   sets a raspbian back to default configuration
    rename <hostname>                                         changes Hostname
    adapter <wirelessSSID> <password> <wirelessSecurityType>  [deprecated] connects a adapter to a wifi network
    wifi <ESSID> [password]                                   connects to a wifi network
    ethernet <ip> <mask> <gateway> <dns>                      configures rpi network interface to a static ip address
    expandfs                                                  expands the partition of the RPI image to the maximum of the SDcard
    detectrpi                                                 detects the hardware version of a raspberry pi
    detectwifi                                                detect chipset of USB-Wifi dongle
    *                                                         temporary catch all

  Options:

    -h, --help  output usage informatio)

  Installation:
    
    1. Install node 8
       > curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
       > sudo apt-get install -y nodejs
    2. Install npm packages called commander and underscore
       > npm install commander
       > npm install underscore
    3. Test the program by changing hostname to ole
       sudo node cli.js rename ole
    4. Output should be like:
       > pi@raspberrypi:~/ip $ cat /etc/hostname
       > ole
