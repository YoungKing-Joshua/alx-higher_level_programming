#!/usr/bin/python3
"""
Module that finds the hightest number in an array.
"""


def find_peak(list_of_integers):

    """
    Method for find within the array it highest number
    """

    if bool(list_of_integers) is False:
        return None
    list_of_integers.sort()
    return list_of_integers[-1]
