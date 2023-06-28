# sfc-config-sd

This project dedicated to create an application for users to configure the required parameters of SFC.

## How to use setup.sh

```bash
scp -i ~/.ssh/id_rsa LocationMapTemp.json Pindefine.json setup.sh pi@172.17.190.211:~
ssh pi@10.130.100.13 'sudo bash ~/setup.sh T5-SMT-SFC-089-U t5-sfc-045 Up T5 && sudo reboot'
ssh pi@10.130.100.13 'cat /etc/SFC/LocationMap.json'

# If your host is linux os. Then the below command can be workable.
# ssh pi@172.17.191.40 "sudo bash -s T5-SMT-SFC-074-U t5-sfc-037 Down" < setup.sh
```
