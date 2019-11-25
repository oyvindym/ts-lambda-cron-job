.PHONY: compress build update-lambda clean deploy

compress:
	@echo "Compressing $(FUNCTION)"
	cd lib && zip -q -r ../index.zip *

build:
	@echo "Building $(FUNCTION)"
	npm run build -- --environment FUNCTION:$(FUNCTION)

update-lambda:
	@echo "Updating lambda $(FUNCTION)"
	aws lambda update-function-code \
		--function-name $(FUNCTION) \
		--file file://index.zip

clean:
	@echo "Cleaning up"
	rm -r index.zip lib

deploy: build compress clean