compress:
	zip -q -r index.zip lib/.

deploy:
	make compress	
	aws lambda update-function-code \
		--function-name hello-world-function \
		--file file://index.zip
