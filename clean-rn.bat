@echo off
echo ============================================
echo  LIMPIEZA PROFUNDA DE REACT NATIVE (WINDOWS)
echo ============================================

echo Cerrando procesos de Node y Gradle...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM java.exe >nul 2>&1
taskkill /F /IM gradle.exe >nul 2>&1

echo Eliminando node_modules...
rmdir /S /Q node_modules

echo Eliminando carpetas de build de Android...
rmdir /S /Q android\app\build
rmdir /S /Q android\build
rmdir /S /Q android\.gradle

echo Eliminando caches conflictivos de gradle-plugin...
rmdir /S /Q node_modules\@react-native\gradle-plugin\shared\build

echo Eliminando caches de Reanimated...
rmdir /S /Q node_modules\react-native-reanimated\android\build

echo Limpieza completa.
echo Ahora ejecuta:
echo    npm install
echo    cd android
echo    gradlew clean
echo    cd ..
echo    npx react-native run-android
echo ============================================
pause