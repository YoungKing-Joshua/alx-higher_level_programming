#!/usr/bin/python3
"""
Sends a POST request to the passed URL with the email as a parameter.
"""
import urllib.request
import urllib.parse
import sys


def main(argv):
    mail = {'email': argv[2]}
    data = urllib.parse.urlencode(mail)
    data = data.encode('utf8')
    site = argv[1]
    req = urllib.request.Request(site, data)

    with urllib.request.urlopen(req) as response:
        result = response.read()
        print(result.decode('utf8'))

if __name__ == "__main__":
    main(sys.argv)
