@echo off

cls
echo https://tortoisesvn.net/downloads.html
echo https://github.com/TienPD3/ChromeExtension.git

echo -- Check Connection --
:ping
ping 1.2.3.4 -n 1 -w 1000 > nul
set target=www.google.com
ping %target% -n 1 | find "TTL="
if errorlevel==1 goto ping

echo == Initiating system instance variables...

echo. -- Setting the variables...
FOR /F "skip=2 tokens=2,*" %%A IN ('reg.exe query "HKEY_LOCAL_MACHINE\SOFTWARE\TortoiseSVN" /v "Directory"') DO set "DFMT=%%B"

:: Here you need to make some changes to suit your system.
set SOURCE=%~dp0
set SVN=%DFMT%bin

:: Unless you want to modify the script, this is enough.

echo. %SOURCE%
echo. %SVN%
echo. ++ Done setting variables.
echo.
echo == Updating source from SVN
echo. -- Running update...
"%SVN%\TortoiseProc.exe" /command:update /path:"%SOURCE%" /closeonend:2
echo. ++ Done.

echo. -- Cleaning up...
set SOURCE=
set SVN=
echo. ++ Done.