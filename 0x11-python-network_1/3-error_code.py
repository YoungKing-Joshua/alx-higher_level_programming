#!/usr/bin/python3
"""
Script sends a request to the URL and displays the body of the response.
"""
import urllib.error
import urllib.request
import sys


def main(argv):
    site = argv[1]
    req = urllib.request.Request(site)

    try:
        with urllib.request.urlopen(req) as response:
            body = response.read().decode('utf8')
            print(body)
    except urllib.error.HTTPError as e:
        print("Error code: {}".format(e.code))


if __name__ == "__main__":
    main(sys.argv)
