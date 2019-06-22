import keyring 
import sys
import keyring.util.platform_
import gkeepapi
import json


keep = gkeepapi.Keep()
token = keyring.get_password('google-keep-token', sys.argv[1])
keep.resume(sys.argv[1],token)

# Store cache
state = keep.dump()
fh = open('state.json', 'w')
json.dump(state, fh)

keep.sync()
