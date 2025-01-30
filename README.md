# XChain Assets Snapshot Maker
This is a tool to make snapshots of the current holders of a given list of Counterparty assets

# Environment
Tested on Node v20.17.0

# Pre-requisite
Node and npm installed

# Installation
npm install

# Usage
1. Copy the assets.env.example file to assets.env
2. Fill it with the token ids you need
3. Run the script
```bash
node make-snapshot.js
```

# Output
The script will generate a CSV file with the snapshot data, <br />
With one line per asset and per holder, like this:

| Token ID | Holder Address | Balance | % of supply |
|------------|-------------------------------------------|-------------|-------------|
| IRLFDCARD| 1KefzFQ7i8W72fQogJLMKWxriHafAXCZuZ | 16.00000000 | 5.33333333 |
| IRLFDCARD| bc1qvh9d3xg7dp9j33mzm70cc0aqu8hshd4epugjzt| 7.00000000 | 2.33333333 |
