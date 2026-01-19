#!/bin/bash
# Installation and Setup Checklist for Karvensen React + Vite Project
# Run this file or follow the checklist manually

echo "🚀 Karvensen Installation Checklist"
echo "===================================="
echo ""

# Check if Node.js is installed
echo "✓ Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org"
    exit 1
fi
echo "✓ Node.js $(node --version) installed"

# Check if npm is installed
echo "✓ Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi
echo "✓ npm $(npm --version) installed"

# Navigate to project
echo ""
echo "📁 Navigating to project directory..."
cd vite-project || exit 1
echo "✓ Inside vite-project directory"

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "⚠️  node_modules already exists"
    read -p "Do you want to reinstall? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Removing existing node_modules..."
        rm -rf node_modules
        echo "Removing package-lock.json..."
        rm -f package-lock.json
    fi
else
    echo "✓ node_modules not found (fresh install)"
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed. Check error messages above."
    exit 1
fi
echo "✓ Dependencies installed successfully"

# Check installed versions
echo ""
echo "📋 Checking installed versions..."
echo "React: $(npm list react | grep react | head -1)"
echo "Vite: $(npm list vite | grep vite | head -1)"
echo "Tailwind: $(npm list tailwindcss | grep tailwindcss | head -1)"

# Check important files
echo ""
echo "📄 Verifying project files..."
files=("src/App.jsx" "src/main.jsx" "src/index.css" "vite.config.js" "tailwind.config.js" "package.json")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ $file"
    else
        echo "❌ $file NOT FOUND"
    fi
done

# Summary
echo ""
echo "=================================="
echo "✅ Installation Complete!"
echo "=================================="
echo ""
echo "📚 Documentation:"
echo "  - Quick Start: QUICK_START.md"
echo "  - Full Docs: README.md"
echo "  - Project Structure: PROJECT_STRUCTURE.md"
echo ""
echo "🚀 Next Steps:"
echo "  1. Review documentation"
echo "  2. Run: npm run dev"
echo "  3. Open browser at: http://localhost:3000"
echo ""
echo "💡 Useful Commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run preview  - Preview production build"
echo "  npm run lint     - Check and fix code style"
echo ""
echo "Happy coding! 🎉"
