import sys
import gkeepapi

keep = gkeepapi.Keep()
success = keep.login(sys.argv[1],sys.argv[2])

note = keep.createNote('Todo','What the fuck')
note.color = gkeepapi.node.ColorValue.Red
keep.sync()
