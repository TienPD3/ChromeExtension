@echo off

cls
echo :: ShopTanPham.Com ::
echo :: Xin vui long doi... ::
TIMEOUT /T 10 /NOBREAK

echo -- Kiem tra mang Internet --

:ping
ping 1.2.3.4 -n 1 -w 1000 > nul
set target=www.google.com
ping %target% -n 1 | find "TTL="
if errorlevel==1 goto ping

echo :: Kiem tra cai dat TortoiseSVN ::
FOR /F "skip=2 tokens=2,*" %%A IN ('reg.exe query "HKEY_LOCAL_MACHINE\SOFTWARE\TortoiseSVN" /v "Directory"') DO set "DFMT=%%B"

echo :: Cai dat duong dan ::
set SOURCE=%~dp0
set SVN=%DFMT%bin

echo. %SOURCE%
echo. %SVN%
echo.
echo :: Xu ly update ::
"%SVN%\TortoiseProc.exe" /command:update /path:"%SOURCE%" /closeonend:2
echo. :: Xong ::

echo. :: Xoa moi truong ::
set SOURCE=
set SVN=
echo. :: Xong ::