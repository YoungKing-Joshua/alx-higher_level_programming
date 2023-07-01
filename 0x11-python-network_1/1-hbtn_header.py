#!/usr/bin/python3
"""
Script sends a request to the URL and 
displays the value of the X-Request-Id variable
"""
import urllib.request
import sys


def main(argv):
    site = argv
    with urllib.request.urlopen(site) as response:
        headers = response.headers()
        print(headers['X-Request-Id'])

if __name__ == "__main__":
    main(sys.argv[1])
