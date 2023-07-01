#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL
and displays the value of the variable X-Request-Id
"""
import requests
import sys


def main(argv):
    site = argv[1]
    res = requests.get(site)
    header = res.headers.get('X-Request-Id')
    print(header)

if __name__ == "__main__":
    main(sys.argv)
