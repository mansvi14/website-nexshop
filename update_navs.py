import os
import re

files = ['index.html', 'men.html', 'women.html', 'kids.html', 'electronics.html', 'household.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace nav block
    # Using regex to match from <nav class="navbar"> to </nav>
    new_content = re.sub(r'<nav class="navbar">.*?</nav>', '<div id="navbar-container"></div>', content, flags=re.DOTALL)
    
    # Add mega-menu.css if not present
    if 'mega-menu.css' not in new_content:
        new_content = new_content.replace('</head>', '    <link rel="stylesheet" href="mega-menu.css">\n</head>')
        
    # Add navbar.js if not present
    if 'navbar.js' not in new_content:
        new_content = new_content.replace('</body>', '    <script src="navbar.js"></script>\n</body>')
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(new_content)
        
print("Updated all files with mega menu container!")
