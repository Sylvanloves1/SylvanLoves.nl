#!/bin/bash

# Start Next.js dev server through Docker
cd /Users/sylvanloves/development/workspace/sylvanloves/website

# Load environment variables
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Run through Docker dev environment
/Users/sylvanloves/development/bin/dev node20 npm run dev
