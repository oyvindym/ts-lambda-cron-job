.PHONY: create-change-set apply-change-set create-stack

create-change-set:
	@echo "Creating change set for $(STACK_NAME)"

apply-change-set:
	@echo "Applying change set for $(STACK_NAME)"

create-stack:
	@echo "Create stack $(STACK_NAME)"
	aws cloudformation create-stack \
		--region eu-west-1 \
		--stack-name $(STACK_NAME) \
		--template-body file://cron-job-lambda.yml \
		--parameters file://$(STACK_NAME)-params.json \
		--capabilities CAPABILITY_NAMED_IAM 

