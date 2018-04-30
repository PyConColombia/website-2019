# -*- coding: utf-8 -*-
"""This is a custom local plugin to ad extra functionality to the pycon site."""

# Third party imports
from setuptools import setup


setup(
    name='lektor-pycon-plugin',
    author='Gonzalo Peña-Castellanos',
    author_email='goanpeca@gmail.com',
    url='https://github.com/pyconcolombia/website-2018/tree/lektor/packages/lektor_pycon_plugin',
    version='0.1',
    license='MIT',
    py_modules=['lektor_pycon_plugin'],
    install_requires=['Lektor'],
    entry_points={
        'lektor.plugins': [
            'pycon-plugin = lektor_pycon_plugin:PyConPlugin',
        ]
    }
)
