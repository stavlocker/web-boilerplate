@echo off
cd ..\backend
call workon %VIRTUALENVNAME%
call manage runserver_plus
