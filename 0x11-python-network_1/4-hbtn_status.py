#!/usr/bin/python3
"""
A script that fetches https://alx-intranet.hbtn.io/status
"""
import requests


def main():
    site = 'https://intranet.hbtn.io/status'
    res = requests.get(site)
    print('Body response:')
    print('\t- type: {}'.format(type(res.text)))
    print('\t- content: {}'.format(res.text))

if __name__ == "__main__":
    main()
