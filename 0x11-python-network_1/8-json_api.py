#!/usr/bin/python3
"""
A script that takes in a letter and sends a POST request
to http://0.0.0.0:5000/search_user with the letter as a parameter.
"""
import requests
import sys


def main(argv):

    if len(argv) < 2:
        q = ""
    else:
        q = argv[1]

    value = {'q': q}
    site = "http://0.0.0.0:5000/search_user"
    res = requests.post(site, data=value)

    try:
        j_data = res.json()
        if bool(j_data) is False:
            print("No result")
        else:
            print("[{}] {}".format(j_data['id'], j_data['name']))
    except ValueError:
        print("Not a valid JSON")

if __name__ == "__main__":
    main(sys.argv)
