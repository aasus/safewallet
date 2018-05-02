echo Refreshing binaries from artifacts.ipv6admin.com
echo =========================================
echo Step: Removing old binaries
mkdir -p build
cd build
rm -rvf artifacts.ipv6admin.com
echo
echo Step: Cloning latest binaries for build
mkdir -p artifacts.ipv6admin.com/latest/osx
curl "https://artifacts.ipv6admin.com/latest/osx/iguana" -o "artifacts.ipv6admin.com/latest/osx/iguana"
curl "https://artifacts.ipv6admin.com/latest/osx/safecoin-cli" -o "artifacts.ipv6admin.com/latest/osx/safecoin-cli"
curl "https://artifacts.ipv6admin.com/latest/osx/safecoind" -o "artifacts.ipv6admin.com/latest/osx/safecoind"
curl "https://artifacts.ipv6admin.com/latest/osx/libgcc_s.1.dylib" -o "artifacts.ipv6admin.com/latest/osx/libgcc_s.1.dylib"
curl "https://artifacts.ipv6admin.com/latest/osx/libgomp.1.dylib" -o "artifacts.ipv6admin.com/latest/osx/libgomp.1.dylib"
curl "https://artifacts.ipv6admin.com/latest/osx/libnanomsg.5.0.0.dylib" -o "artifacts.ipv6admin.com/latest/osx/libnanomsg.5.0.0.dylib"
curl "https://artifacts.ipv6admin.com/latest/osx/libstdc%2B%2B.6.dylib" -o "artifacts.ipv6admin.com/latest/osx/libstdc++.6.dylib"

chmod -R +x artifacts.ipv6admin.com/latest/
cd ..
echo =========================================
echo 
echo =========================================
echo Step: Moving osx binaries from artifacts to assets/bin/osx/
echo 
mv -fv build/artifacts.ipv6admin.com/latest/osx/iguana assets/bin/osx/
mv -fv build/artifacts.ipv6admin.com/latest/osx/safecoin-cli assets/bin/osx/
mv -fv build/artifacts.ipv6admin.com/latest/osx/safecoind assets/bin/osx/
mv -fv build/artifacts.ipv6admin.com/latest/osx/libgcc_s.1.dylib assets/bin/osx/
mv -fv build/artifacts.ipv6admin.com/latest/osx/libgomp.1.dylib assets/bin/osx/
mv -fv build/artifacts.ipv6admin.com/latest/osx/libnanomsg.5.0.0.dylib assets/bin/osx/
mv -fv build/artifacts.ipv6admin.com/latest/osx/libstdc++.6.dylib assets/bin/osx/
echo 
echo =========================================
echo Step: Moving Win64 binaries from artifacts to assets/bin/win64/
echo 
mv -fv build/artifacts.ipv6admin.com/latest/windows/gensafeconf.bat assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/iguana.exe assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/index.html assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/safecoin-cli.exe assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/safecoin-tx.exe assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/safecoind.exe assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libcrypto-1_1.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libcurl-4.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libcurl.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libgcc_s_sjlj-1.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libnanomsg.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libssl-1_1.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/libwinpthread-1.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/nanomsg.dll assets/bin/win64/
mv -fv build/artifacts.ipv6admin.com/latest/windows/pthreadvc2.dll assets/bin/win64/
echo 
echo =========================================
echo Step: Moving linux64 binaries from artifacts to assets/bin/linux64
echo 
mv -fv build/artifacts.ipv6admin.com/latest/linux/iguana assets/bin/linux64/
mv -fv build/artifacts.ipv6admin.com/latest/linux/safecoin-cli assets/bin/linux64/
mv -fv build/artifacts.ipv6admin.com/latest/linux/safecoind assets/bin/linux64/
echo 
echo =========================================
echo Step: Cleaning artifacts data
echo
rm -rf build/
echo 
echo =========================================
echo Step: Finished Updating binaries from artifacts
echo 