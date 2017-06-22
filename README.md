  Usage: node cli.js [options] [command]


  Commands:

    default                                                   sets a raspbian back to default configuration
    rename <hostname>                                         changes Hostname
    adapter <wirelessSSID> <password> <wirelessSecurityType>  [deprecated] connects a adapter to a wifi network
    wifi <ESSID> [password]                                   connects to a wifi network
    swifi <ip> <mask> <gateway> <dns>                      configures rpi wifi interface to a static ip address

    sethernet <ip> <mask> <gateway> <dns>                      configures rpi ethernet interface to a static ip address
    expandfs                                                  expands the partition of the RPI image to the maximum of the SDcard
    detectrpi                                                 detects the hardware version of a raspberry pi
    *                                                         temporary catch all

  Options:

    -h, --help  output usage informatio)

  Installation:
    So far this program assumes you can somehow manage to download nodejs 8 and also the npm packages commander and underscore, which are required for this program to run properly. 
    
    1. Install node 8
       > curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
       > sudo apt-get install -y nodejs
    2. Clone this repo then cd into ip directory
       > git clone https://github.com/snazzybunny/ip.git
       > cd ip
    3. Install npm packages called commander and underscore
       > sudo npm install commander
       > sudo npm install underscore
    4. Figure out hostname of rpi. Output should print raspberrypi by default.
       > hostname
    5. Test the program by changing hostname to ole.
       > sudo node cli.js rename ole
    6. Output should be like:
       > pi@raspberrypi:~/ip $ cat /etc/hostname
       > ole
