#!/usr/bin/python3
"""
Module to access to the GitHub API and uses the information
"""
import requests
import sys
from requests.auth import HTTPBasicAuth


def main(argv):

    user = argv[1]
    password = argv[2]
    res = requests.get('https://api.github.com/user',
                            auth=HTTPBasicAuth(user, password))
    try:
        profile_data = res.json()
        print(profile_data['id'])
    except:
        print('None')

if __name__ == "__main__":
    main(sys.argv)
