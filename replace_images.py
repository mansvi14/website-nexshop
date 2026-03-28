import os

files = ['index.html', 'men.html', 'women.html', 'kids.html', 'electronics.html', 'household.html']

replacements = {
    './assets/images/men.png': 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600',
    './assets/images/women.png': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
    './assets/images/kids.png': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600',
    './assets/images/electronics.png': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600',
    './assets/images/household.png': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600',
    './assets/images/hero.png': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200'
}

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        for old_img, new_img in replacements.items():
            content = content.replace(old_img, new_img)
            
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Updated {f}")
    except FileNotFoundError:
        print(f"Skipped {f} - not found")

print("All unsplash replacements complete!")
