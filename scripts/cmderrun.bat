@echo off
cd /D %~dp0
echo "Running backend script in a new window"
call cmd /D %~dp0 -new_console:s /k backend.bat
echo "Running frontend script"
call frontend.bat
