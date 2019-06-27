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
    list = {}

    if (isinstance(note,gkeepapi.node.List)):
        list = [{"text": item.text, "checked": item.checked} for item in note.checked]
        note_json = {
                    "id": note.id,
                    "title": note.title,
                    "list": list,
                    "color": note.color.value,
                    "archived": note.archived,
                    "pinned": note.pinned,
            }
    else:
        note_json = {
                "id": note.id,
                "title": note.title,
                "text": note.text,
                "color": note.color.value,
                "archived": note.archived,
                "pinned": note.pinned,
        }

    print(json.dumps(note_json, sort_keys=True))
    

    
# Store cache
# state = keep.dump()
# fh = open('state.json', 'w')
# json.dump(state, fh)

keep.sync()
