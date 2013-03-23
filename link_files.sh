#!/bin/bash

#Link the needed files to the different extensions
#They need to be hard links

EXTENSIONS="chrome_extension youtube-dl.safariextension firefox/data"
YDL_WEB="youtube-dl-web/InfoViewer.js youtube-dl-web/VideoInfo.js youtube-dl-web/processURL.js"
FILES="popup.html icon_button.png Icon.png icon128.png icon48.png ${YDL_WEB}"
echo ${FILES}
TOP_DIR=${PWD}
COMMON=${PWD}/common
for EXTENSION in ${EXTENSIONS}
do
	cd "${TOP_DIR}/${EXTENSION}"
	for FILE in ${FILES}
	do
		ln "${COMMON}/${FILE}" `basename "${FILE}"`
	done
	mkdir "assets"
	cd "assets"
	ln ${TOP_DIR}/assets/*
done
