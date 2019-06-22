import sys
import keyring
import gkeepapi

sys.stdout.flush()

keep = gkeepapi.Keep()
success = keep.login(sys.argv[1],sys.argv[2])

token = keep.getMasterToken()
keyring.set_password('google-keep-token', sys.argv[1], token)

keep.sync()
