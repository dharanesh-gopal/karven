@echo off
REM Installation and Setup Checklist for Karvensen React + Vite Project
REM Run this file to automatically set up the project

setlocal enabledelayedexpansion

echo.
echo 🚀 Karvensen Installation Checklist
echo ====================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js %NODE_VERSION% installed

REM Check if npm is installed
echo Checking npm installation...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✓ npm %NPM_VERSION% installed

REM Navigate to project directory
echo.
echo 📁 Navigating to project directory...
cd /d "%~dp0"
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to navigate to project directory
    pause
    exit /b 1
)
echo ✓ Inside vite-project directory

REM Check if node_modules exists
if exist "node_modules" (
    echo.
    echo ⚠️  node_modules already exists
    set /p REINSTALL="Do you want to reinstall? (y/n): "
    if /i "!REINSTALL!"=="y" (
        echo Removing existing node_modules...
        rmdir /s /q node_modules
        echo Removing package-lock.json...
        del /q package-lock.json
    )
) else (
    echo ✓ node_modules not found (fresh install)
)

REM Install dependencies
echo.
echo 📦 Installing dependencies...
echo This may take a few minutes...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Installation failed. Check error messages above.
    pause
    exit /b 1
)
echo.
echo ✓ Dependencies installed successfully

REM Check important files
echo.
echo 📄 Verifying project files...
set "files=src\App.jsx" "src\main.jsx" "src\index.css" "vite.config.js" "tailwind.config.js" "package.json"
for %%f in (%files%) do (
    if exist "%%f" (
        echo ✓ %%f
    ) else (
        echo ❌ %%f NOT FOUND
    )
)

REM Summary
echo.
echo ==================================
echo ✅ Installation Complete!
echo ==================================
echo.
echo 📚 Documentation:
echo   - Quick Start: QUICK_START.md
echo   - Full Docs: README.md
echo   - Project Structure: PROJECT_STRUCTURE.md
echo.
echo 🚀 Next Steps:
echo   1. Review documentation
echo   2. Run: npm run dev
echo   3. Open browser at: http://localhost:3000
echo.
echo 💡 Useful Commands:
echo   npm run dev      - Start development server
echo   npm run build    - Build for production
echo   npm run preview  - Preview production build
echo   npm run lint     - Check and fix code style
echo.
echo Happy coding! 🎉
echo.
pause
