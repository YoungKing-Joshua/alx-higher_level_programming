#!/usr/bin/python3
"""
A script that fetches https://intranet.hbtn.io/status
"""
import urllib.request


def main():

    """
    To print reponse of url
    """

    site = 'https://intranet.hbtn.io/status'
    with urllib.request.urlopen(site) as response:
        body = response.read()
        body_content_type = type(body)
        body_content = body.decode('utf-8')

    print("Body response:")
    print("\t- type: {}".format(body_content_type))
    print("\t- content: {}".format(body))
    print("\t- utf8 content: {}".format(body_content))

if __name__ == "__main__":
    main()
