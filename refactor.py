import re

with open('d:\\CODE BASE\\app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update safeAddEventListener definition
new_fn = '''function safeAddEventListener(id, event, handler) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener(event, handler);
  } else {
    console.warn(`Element with ID '${id}' not found. Skipping listener safely.`);
  }
}'''

# Replace old safeAddListener with safeAddEventListener function
if 'function safeAddListener(id, event, handler)' in content:
    content = re.sub(r'function safeAddListener\(id, event, handler\) \{.*?\};\n?', new_fn + '\n', content, flags=re.DOTALL)
else:
    # Just append it or replace
    pass

# Replace calls of safeAddListener
content = content.replace('safeAddListener(', 'safeAddEventListener(')

# 2. Replace direct document.getElementById('id').addEventListener('event', handler) calls.
# A bounded regex without DOTALL to match only simple single line starters.
# Many listeners have multi-line anonymous functions. The start of it looks like:
# document.getElementById("lang-toggle-checkbox").addEventListener("change", function (e) {
# We want to replace it with:
# safeAddEventListener("lang-toggle-checkbox", "change", function (e) {

# Regex pattern:
# r'document\.getElementById\(([\'\"])(.*?)\1\)\.addEventListener\(([\'\"])(.*?)\3\s*,'
pattern = r'document\.getElementById\(([\'\"])(.*?)\1\)\.addEventListener\(([\'\"])(.*?)\3\s*,'

def repl(match):
    id_name = match.group(2)
    event_name = match.group(4)
    # Return replacement
    return f'safeAddEventListener("{id_name}", "{event_name}",'

content = re.sub(pattern, repl, content)

# Write back
with open('d:\\CODE BASE\\app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing.")
