#!/bin/bash

echo "Starting migration..."
npx prisma migrate deploy

echo "Starting server..."
npm run start