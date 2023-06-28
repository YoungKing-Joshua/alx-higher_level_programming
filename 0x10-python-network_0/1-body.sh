#!/bin/bash
# A Bash script that takes a URL, 
# sends a GET request to the URL, 
# and displays body of the response.

curl -Lsf "$1"
