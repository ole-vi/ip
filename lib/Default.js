#!/usr/bin/env node

/**
 * Module dependencies.
 */

var sys = require('util')
var exec = require('child_process').exec;
var _ = require('underscore')
var program = require('commander');
var fs = require('fs');
function puts(error, stdout, stderr) { sys.puts(stdout) } 

// Set settings.hostname in /etc/hosts and etc/hostname
module.exports = function(callback) {
  cmd = 'sudo cp '+__dirname+'/interfaces.default /etc/network/interfaces;'
  cmd += 'sudo cp '+__dirname+'/hostname.default /etc/hostname;'
  cmd += 'sudo cp '+__dirname+'/hosts.default /etc/hosts;'
  cmd += 'sudo cp '+__dirname+'/wpa_supplicant.conf.default /etc/wpa_supplicant/wpa_supplicant.conf;'
  cmd += 'sudo rm /usr/local/bin/hostapdstart;'
  cmd += 'sudo rm -rf /etc/hostapd.conf;'
  cmd += 'sudo /etc/init.d/hostname.sh;'
  cmd += 'sudo sed -i '/hostapdstart/d;' /etc/rc.local;'
  cmd += 'sudo rm /var/lib/dhcp/dhclient.*;'

//console.log(cmd)

  exec(cmd, function(error, stdout, stderr) {
    if (error) return callback(error)
//    return callback(0) 
  })
} 
