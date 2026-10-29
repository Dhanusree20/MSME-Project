import re
with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = content.replace('\\`', '`').replace('\\${', '${')

with open('app.js', 'w', encoding='utf-8') as out:
    out.write(new_content)
print('Fixed!')
