#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create directories
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins', exist_ok=True)
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping', exist_ok=True)
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing', exist_ok=True)

# Lits Camping theme colors
COLORS = {
    'forest_green': (34, 85, 51),
    'water_blue': (70, 130, 180),
    'sunrise_orange': (230, 126, 34),
    'cream': (245, 242, 238),
    'white': (255, 255, 255),
}

def create_photo_placeholder(path, title, subtitle, primary_color, icon='📷'):
    """Create a realistic looking photo placeholder"""
    width, height = 1024, 683
    
    # Create gradient background
    img = Image.new('RGB', (width, height), COLORS['cream'])
    pixels = img.load()
    
    # Create gradient from primary color to a lighter shade
    for y in range(height):
        # Gradient effect
        ratio = y / height
        r = int(COLORS['cream'][0] * (1 - ratio * 0.3) + primary_color[0] * ratio * 0.3)
        g = int(COLORS['cream'][1] * (1 - ratio * 0.3) + primary_color[1] * ratio * 0.3)
        b = int(COLORS['cream'][2] * (1 - ratio * 0.3) + primary_color[2] * ratio * 0.3)
        for x in range(width):
            pixels[x, y] = (r, g, b)
    
    draw = ImageDraw.Draw(img)
    
    # Add a colored accent bar at top
    draw.rectangle([(0, 0), (width, 120)], fill=primary_color)
    
    # Try to use a larger font
    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 54)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
        icon_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 80)
    except:
        title_font = subtitle_font = icon_font = ImageFont.load_default()
    
    # Draw icon and title on colored bar
    draw.text((50, 20), icon, fill=COLORS['cream'], font=icon_font)
    draw.text((160, 35), title, fill=COLORS['white'], font=title_font)
    
    # Draw subtitle below
    draw.text((50, 200), subtitle, fill=primary_color, font=subtitle_font)
    
    # Add some decorative elements
    draw.rectangle([(0, 115), (width, 120)], fill=COLORS['white'])
    
    img.save(path)
    print(f'✓ Created {os.path.basename(path)}')

# Cabin images
create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-6bed-1.jpg',
    '6-Bed Cottage',
    'Spacious self-catering accommodation',
    COLORS['forest_green'],
    '🏘️'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-4bed-1.jpg',
    '4-Bed Cottage',
    'Cozy comfortable dwelling',
    COLORS['water_blue'],
    '🏠'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-4bed-2.jpg',
    '4-Bed Cottage',
    'Interior comfort and warmth',
    COLORS['sunrise_orange'],
    '🛏️'
)

# Camping images
create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-aerial.jpg',
    'Camping Area',
    'Beautiful riverside camping grounds',
    COLORS['forest_green'],
    '🏕️'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-tents.jpg',
    'Tent Sites',
    'Perfect for nature lovers',
    COLORS['water_blue'],
    '⛺'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-rv.jpg',
    'RV Parking',
    'Modern facilities for larger vehicles',
    COLORS['sunrise_orange'],
    '🚐'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-facilities.jpg',
    'Facilities',
    'Full amenities for your comfort',
    COLORS['forest_green'],
    '🏛️'
)

# Canoe images
create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-1.jpg',
    'Paddling Adventure',
    'Explore pristine Swedish waterways',
    COLORS['water_blue'],
    '🛶'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-2.jpg',
    'Sunset Expedition',
    'Golden hour on the water',
    COLORS['sunrise_orange'],
    '🌅'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-3.jpg',
    'Multi-Day Journey',
    'Wilderness camping experience',
    COLORS['forest_green'],
    '🌲'
)

create_photo_placeholder(
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-4.jpg',
    'Group Paddling',
    'Share the adventure with friends',
    COLORS['water_blue'],
    '👥'
)

print('\n✓ All images created successfully!')
