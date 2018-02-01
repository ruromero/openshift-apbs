#!/usr/bin/python
# -*- coding: utf-8 -*-
# pylint: disable=too-many-lines
"""
Custom filters for use in efp apb deployment
"""
import bcrypt

from ansible import errors

def es_apb_bcrypt(password):
    """ generate bcrypt hash for the password """

    if not isinstance(password, basestring):
        raise errors.AnsibleFilterError("|failed expects password is basestring")

    return bcrypt.hashpw(password, bcrypt.gensalt(log_rounds=10))

class FilterModule(object):
    def filters(self):
        """ returns a mapping of filters to methods """
        return {
            'es_apb_bcrypt': es_apb_bcrypt
        }
