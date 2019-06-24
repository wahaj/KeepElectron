import keyring 
import sys
import keyring.util.platform_
import gkeepapi
import json


keep = gkeepapi.Keep()
token = keyring.get_password('google-keep-token', sys.argv[1])
keep.resume(sys.argv[1],token)

gnotes = keep.all()
note_json = {}
for note in gnotes:
    note_json = {
            "title": note.title,
            "text": note.text,
            "archived": note.archived,
            "pinned": note.pinned,
            "color": note.color.value
            }
    print(json.dumps(note_json, sort_keys=True))
    

    
# Store cache
# state = keep.dump()
# fh = open('state.json', 'w')
# json.dump(state, fh)

keep.sync()
