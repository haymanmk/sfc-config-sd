#!/usr/bin/bash

set -e

HOSTNAME=$1
echo "Set hostname as $HOSTNAME"
sudo echo $HOSTNAME > /etc/hostname || exit 1
sudo sed -i "/127.0.1.1/d" /etc/hosts || exit 1
sudo echo "127.0.1.1	$HOSTNAME" >> /etc/hosts || exit 1
echo "Set hostname finished" && exit 0
