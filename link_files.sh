#!/bin/bash

#Link the needed files to the different extensions
#They need to be hard links

EXTENSIONS="chrome_extension youtube-dl.safariextension"
FILES="popup.html icon_button.png Icon.png icon128.png icon48.png load_videos.js"
TOP_DIR=${PWD}
COMMON=${PWD}/common
for EXTENSION in ${EXTENSIONS}
do
	cd "${TOP_DIR}"
	for FILE in ${FILES}
	do
		ln "${COMMON}/${FILE}" "${EXTENSION}/${FILE}"
	done
	mkdir "${EXTENSION}/assets"
	cd "${EXTENSION}/assets"
	ln ../../assets/*
done
