#!/usr/bin/python3
"""
Sends a request to the URL and displays the body of the response.
"""
import requests
import sys


def main(argv):

    site = argv[1]
    res = requests.get(site)
    if res.status_code == requests.codes.ok:
        print(res.text)
    else:
        print("Error code: {}".format(res.status_code))


if __name__ == "__main__":
    main(sys.argv)
