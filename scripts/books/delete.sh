#!/bin/bash

ID="11"
curl "http://localhost:4741/books/$ID" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"

echo
