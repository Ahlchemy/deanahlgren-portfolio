#!/bin/bash

# Deploy script for Dean Ahlgren Portfolio
# Usage: ./deploy.sh

set -e

# Configuration
SSH_HOST="156.67.75.188"
SSH_USER="u197354438"
SSH_PORT="65002"
REMOTE_PATH="public_html"

echo "🔨 Building production bundle..."
npm run build

echo "🚀 Deploying to Hostinger..."
rsync -avz --delete \
  -e "ssh -p ${SSH_PORT}" \
  dist/ \
  ${SSH_USER}@${SSH_HOST}:~/${REMOTE_PATH}/

echo "✅ Deployment complete!"
echo "🌐 Site is live at your domain"
