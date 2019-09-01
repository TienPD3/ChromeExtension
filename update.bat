@echo off

cls
echo https://tortoisesvn.net/downloads.html
echo https://github.com/TienPD3/ChromeExtension.git
echo == Initiating system instance variables...
echo. -- Setting the variables...

FOR /F "skip=2 tokens=2,*" %%A IN ('reg.exe query "HKEY_LOCAL_MACHINE\SOFTWARE\TortoiseSVN" /v "Directory"') DO set "DFMT=%%B"

:: Here you need to make some changes to suit your system.
set SOURCE=%cd%
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