@echo off
chcp 65001 >nul
echo ====================================
echo    Java Learning Hub - Quick Runner
echo ====================================
echo.

set TEMP_DIR=%TEMP%\JavaHub
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"

echo Enter your Java code (end with EOF on new line):
echo ----------------------------------------

set /p CLASS_NAME="Enter class name (e.g., Main): "

echo.
echo Enter code (paste your code, then press Enter then Ctrl+Z then Enter to finish):
echo.

set code=
set /p code="> "
if defined code (
    (echo %code%) >> "%TEMP_DIR%\%CLASS_NAME%.java"
)

more >> "%TEMP_DIR%\%CLASS_NAME%.java"

echo.
echo Compiling %CLASS_NAME%.java...
echo ----------------------------------------

"C:\Program Files\Common Files\Oracle\Java\javapath\javac.exe" "%TEMP_DIR%\%CLASS_NAME%.java"
if errorlevel 1 (
    echo.
    echo Compilation failed! Check your code.
    pause
    exit /b 1
)

echo.
echo Running %CLASS_NAME%...
echo ----------------------------------------
echo.

"C:\Program Files\Common Files\Oracle\Java\javapath\java.exe" -cp "%TEMP_DIR%" %CLASS_NAME%

echo.
echo ====================================
pause
