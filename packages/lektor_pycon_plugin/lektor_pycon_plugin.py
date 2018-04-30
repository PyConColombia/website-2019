# -*- coding: utf-8 -*-
"""This is a custom local plugin to ad extra functionality to pybee site."""

# Standard library imports
from collections import OrderedDict
import sys

# Third party imports
from lektor.pluginsystem import Plugin


PY3 = sys.version_info[0] == 3


class PyConPlugin(Plugin):
    name = 'PyCon Custom Lektor Plugin'
    description = 'This is a custom local plugin to add extra functionality.'

    DATE_FORMAT = "%Y-%m-%d %H:%M:%S"

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals.update(dir=dir)
        self.env.jinja_env.globals.update(OrderedDict=OrderedDict)
