@echo off

cls
echo https://github.com/TienPD3/ChromeExtension.git
echo == Initiating system instance variables...
echo. -- Setting the variables...

:: Here you need to make some changes to suit your system.
set SOURCE=E:\shoptanpham.com
set SVN=D:\Program Files\TortoiseSVN\bin

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