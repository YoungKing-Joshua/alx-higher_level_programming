#!/usr/bin/python3
"""
A script that takes in a URL and an email address, sends a
POST request to the passed URL with the email as a parameter
"""
import requests
import sys


def main(argv):

    mail = {'email': argv[2]}
    site = argv[1]
    res = requests.post(site, data=mail)
    print(res.text)

if __name__ == "__main__":
    main(sys.argv)
