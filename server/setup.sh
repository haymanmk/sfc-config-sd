#!/usr/bin/env bash

set -ex

NEW_HOSTNAME=$1
CARTID=$2
POSITION=$3
ORG=$4
CURRENT_HOSTNAME=$(cat /etc/hostname)

DIRPATH=$(dirname $0)
LocationMapTemp_Path="${DIRPATH}/LocationMapTemp.json"
LocationMap_Path="${DIRPATH}/LocationMap.json"
Pindefine_Path="${DIRPATH}/Pindefine.json"
ConfigDestination_Path="/etc/SFC"

if [ -f ${LocationMap_Path} ]; then
	rm -f ${LocationMap_Path} 
fi
cp ${LocationMapTemp_Path} ${LocationMap_Path}
sudo sed -i "s/HOSTNAME/${NEW_HOSTNAME^^}/g" ${LocationMap_Path}
sudo sed -i "s/CARTID/$CARTID/g" ${LocationMap_Path}
sudo sed -i "s/POS/$POSITION/g" ${LocationMap_Path}
sudo sed -i "s/ORG/$ORG/g" ${LocationMap_Path}

if [ -d ${ConfigDestination_Path} ]; then
	sudo rm -rv ${ConfigDestination_Path}
fi

echo "Create folder ${ConfigDestination_Path}" 
sudo mkdir ${ConfigDestination_Path}
sudo cp ${LocationMap_Path} ${ConfigDestination_Path} || exit 1
sudo cp ${Pindefine_Path} ${ConfigDestination_Path} || exit 1

if [ $NEW_HOSTNAME = $CURRENT_HOSTNAME ]; then
    echo "Name $NEW_HOSTNAME already set"
else
    echo "Setting Name" $NEW_HOSTNAME
    sudo echo $NEW_HOSTNAME > /etc/hostname || exit 1
    sudo sed -i "/127.0.1.1/d" /etc/hosts || exit 1
    sudo echo "127.0.1.1	$NEW_HOSTNAME" >> /etc/hosts || exit 1
    echo "Successfully change hostname"
    echo " "
fi

echo "Please reboot system to complete setting."
sudo reboot